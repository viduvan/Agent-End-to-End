#!/usr/bin/env node
/**
 * descriptive-name.cjs — Enforce tên file descriptive
 * 
 * Hook Type: PreToolUse (Write)
 * Trigger: Khi agent tạo file mới
 * 
 * Warn nếu tên file không descriptive (quá ngắn, generic names)
 */

const path = require('path');

const GENERIC_NAMES = [
  'temp', 'tmp', 'test', 'file', 'data', 'output', 'result',
  'script', 'code', 'main', 'app', 'index', 'utils', 'helpers',
  'stuff', 'misc', 'foo', 'bar', 'baz',
];

const MIN_NAME_LENGTH = 3;

async function main() {
  let input = '';
  for await (const chunk of process.stdin) { input += chunk; }
  
  let hookData;
  try { hookData = JSON.parse(input); } catch (e) { process.exit(0); }

  const filePath = hookData.tool_input?.file_path || hookData.tool_input?.path;
  if (!filePath) process.exit(0);

  const basename = path.basename(filePath, path.extname(filePath)).toLowerCase();
  
  // Check if name is too generic
  if (GENERIC_NAMES.includes(basename)) {
    console.error(`
\x1b[33mNAMING WARN\x1b[0m: "${basename}" is too generic.
  Use a descriptive name that explains the file's purpose.
  Example: "user-auth-service" instead of "utils"
`);
    // Warn only, don't block
  }

  // Check if name is too short
  if (basename.length < MIN_NAME_LENGTH && !['db', 'ci', 'cd'].includes(basename)) {
    console.error(`
\x1b[33mNAMING WARN\x1b[0m: "${basename}" is very short (${basename.length} chars).
  Consider a more descriptive name for better discoverability.
`);
  }

  process.exit(0); // Always allow (warn only)
}

main().catch(() => process.exit(0));
