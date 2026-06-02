#!/usr/bin/env node
/**
 * simplify-gate.cjs — Chặn ship code chưa refactor
 * 
 * Hook Type: UserPromptSubmit
 * Trigger: Khi user prompt chứa "ship" hoặc "commit" với diff lớn
 * 
 * Actions:
 * - "ship" + large diff → BLOCK (phải simplify trước)
 * - "commit" + large diff → WARN (gợi ý simplify)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DIFF_THRESHOLD = 300; // lines
const SHIP_KEYWORDS = /\b(ship|deploy|release)\b/i;
const COMMIT_KEYWORDS = /\b(commit|push|merge)\b/i;

function getDiffSize() {
  try {
    const diff = execSync('git diff --stat HEAD 2>/dev/null || git diff --stat --cached 2>/dev/null', {
      encoding: 'utf8', timeout: 5000
    });
    const match = diff.match(/(\d+) files? changed/);
    const insertions = diff.match(/(\d+) insertion/);
    const deletions = diff.match(/(\d+) deletion/);
    const total = (parseInt(insertions?.[1] || 0)) + (parseInt(deletions?.[1] || 0));
    return { files: parseInt(match?.[1] || 0), lines: total };
  } catch (e) {
    return { files: 0, lines: 0 };
  }
}

function isDisabled() {
  try {
    const config = JSON.parse(fs.readFileSync(
      path.join(process.cwd(), '.claude', '.ck.json'), 'utf8'
    ));
    return config.simplifyGate === false;
  } catch (e) {
    return false;
  }
}

async function main() {
  if (isDisabled()) process.exit(0);

  let input = '';
  for await (const chunk of process.stdin) { input += chunk; }

  let hookData;
  try { hookData = JSON.parse(input); } catch (e) { process.exit(0); }

  const prompt = hookData.user_prompt || hookData.prompt || '';
  if (!prompt) process.exit(0);

  const isShip = SHIP_KEYWORDS.test(prompt);
  const isCommit = COMMIT_KEYWORDS.test(prompt);
  if (!isShip && !isCommit) process.exit(0);

  const diff = getDiffSize();
  if (diff.lines <= DIFF_THRESHOLD) process.exit(0);

  if (isShip) {
    console.error(`
\x1b[31mSIMPLIFY GATE\x1b[0m: Cannot ship — diff too large (${diff.lines} lines, ${diff.files} files)
  Threshold: ${DIFF_THRESHOLD} lines
  Run /fis:code-review first, then simplify before shipping.
  Bypass: Set simplifyGate=false in .claude/.ck.json
`);
    process.exit(2); // BLOCK
  }

  if (isCommit) {
    console.error(`
\x1b[33mSIMPLIFY WARN\x1b[0m: Large diff detected (${diff.lines} lines, ${diff.files} files)
  Consider running /fis:code-review before committing.
  This is a warning — commit will proceed.
`);
    process.exit(0); // WARN only
  }

  process.exit(0);
}

main().catch(() => process.exit(0));
