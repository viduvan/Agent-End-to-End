#!/usr/bin/env node
/** task-completed-handler.cjs — Handle task completion */
const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8').trim();
  const data = input ? JSON.parse(input) : {};
  // Log task completion
  console.error(`\x1b[32m[task-completed]\x1b[0m Subagent task finished`);
  process.exit(0);
} catch (e) { process.exit(0); }
