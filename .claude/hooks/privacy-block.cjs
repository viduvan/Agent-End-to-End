#!/usr/bin/env node
/**
 * privacy-block.cjs — Chặn truy cập file nhạy cảm
 * 
 * Hook Type: PreToolUse
 * Trigger: Khi agent đọc/ghi file matching privacy patterns
 * 
 * Flow:
 * 1. Agent đọc ".env" → BLOCKED
 * 2. Agent hỏi user approve
 * 3. User approve → Agent retry với prefix "APPROVED:.env" → ALLOWED
 */

const path = require('path');
const fs = require('fs');

const APPROVED_PREFIX = 'APPROVED:';

// Safe patterns - exempt from privacy checks
const SAFE_PATTERNS = [
  /\.example$/i,
  /\.sample$/i,
  /\.template$/i,
];

// Privacy-sensitive patterns
const PRIVACY_PATTERNS = [
  /^\.env$/,
  /^\.env\./,
  /\.env$/,
  /\/\.env\./,
  /credentials/i,
  /secrets?\.ya?ml$/i,
  /\.pem$/,
  /\.key$/,
  /id_rsa/,
  /id_ed25519/,
];

function isSafeFile(testPath) {
  if (!testPath) return false;
  const basename = path.basename(testPath);
  return SAFE_PATTERNS.some(p => p.test(basename));
}

function hasApprovalPrefix(testPath) {
  return testPath && testPath.startsWith(APPROVED_PREFIX);
}

function isPrivacySensitive(testPath) {
  if (!testPath) return false;
  const cleanPath = hasApprovalPrefix(testPath) 
    ? testPath.slice(APPROVED_PREFIX.length) 
    : testPath;
  let normalized = cleanPath.replace(/\\/g, '/');
  try { normalized = decodeURIComponent(normalized); } catch (e) {}
  if (isSafeFile(normalized)) return false;
  const basename = path.basename(normalized);
  return PRIVACY_PATTERNS.some(p => p.test(basename) || p.test(normalized));
}

function extractPaths(toolInput) {
  const paths = [];
  if (!toolInput) return paths;
  if (toolInput.file_path) paths.push(toolInput.file_path);
  if (toolInput.path) paths.push(toolInput.path);
  if (toolInput.pattern) paths.push(toolInput.pattern);
  if (toolInput.command) {
    const envMatches = toolInput.command.match(/\.env[^\s]*/g) || [];
    envMatches.forEach(p => paths.push(p));
  }
  return paths.filter(Boolean);
}

async function main() {
  // Check if disabled
  try {
    const config = JSON.parse(fs.readFileSync(
      path.join(process.cwd(), '.claude', '.ck.json'), 'utf8'
    ));
    if (config.privacyBlock === false) process.exit(0);
  } catch (e) {}

  let input = '';
  for await (const chunk of process.stdin) { input += chunk; }

  let hookData;
  try { hookData = JSON.parse(input); } catch (e) { process.exit(0); }

  const paths = extractPaths(hookData.tool_input);
  for (const testPath of paths) {
    if (!isPrivacySensitive(testPath)) continue;
    if (hasApprovalPrefix(testPath)) {
      console.error(`\x1b[32m✓\x1b[0m Privacy: User-approved access to ${path.basename(testPath)}`);
      continue;
    }
    console.error(`
\x1b[33mPRIVACY BLOCK\x1b[0m: ${testPath}
  File may contain secrets (API keys, passwords, tokens).
  Ask user: "I need to read ${path.basename(testPath)}. Approve?"
  If YES: Retry with prefix APPROVED:${testPath}
  If NO: Continue without this file.
`);
    process.exit(2);
  }
  process.exit(0);
}

main().catch(() => process.exit(0));

module.exports = { isSafeFile, isPrivacySensitive, hasApprovalPrefix, extractPaths };
