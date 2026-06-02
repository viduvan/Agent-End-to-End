#!/usr/bin/env node
/** cook-after-plan-reminder.cjs — Nhắc craft sau khi plan xong */
const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8').trim();
  const data = input ? JSON.parse(input) : {};
  // Check if plan was just created, remind to craft
  const filePath = data.tool_input?.file_path || '';
  if (filePath.includes('plan') && filePath.endsWith('.md')) {
    console.error(`\x1b[36m[reminder]\x1b[0m Plan created. Next: /fis:craft to start implementation.`);
  }
  process.exit(0);
} catch (e) { process.exit(0); }
