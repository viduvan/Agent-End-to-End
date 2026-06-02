#!/usr/bin/env node
/** dev-rules-reminder.cjs — Inject dev rules vào prompt context */
const fs = require('fs');
const path = require('path');

async function main() {
  let input = '';
  for await (const chunk of process.stdin) { input += chunk; }

  let hookData;
  try { hookData = JSON.parse(input); } catch (e) { process.exit(0); }

  const prompt = hookData.user_prompt || hookData.prompt || '';
  
  // Inject reminder for code-related prompts
  const codeKeywords = /\b(implement|code|build|create|fix|refactor|craft)\b/i;
  if (codeKeywords.test(prompt)) {
    const claudeMd = path.join(process.cwd(), 'CLAUDE.md');
    if (fs.existsSync(claudeMd)) {
      console.error(`\x1b[36m[dev-rules]\x1b[0m Loaded CLAUDE.md project rules`);
    }
  }

  process.exit(0);
}

main().catch(() => process.exit(0));
