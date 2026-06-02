#!/usr/bin/env node
/**
 * plan-format-kanban.cjs — Validate plan.md format
 * 
 * Hook Type: PostToolUse
 * Trigger: Khi plan.md được tạo/cập nhật
 * 
 * Warn: Dùng filename thay human-readable title trong links
 */

const fs = require('fs');
const path = require('path');

async function main() {
  let input = '';
  for await (const chunk of process.stdin) { input += chunk; }

  let hookData;
  try { hookData = JSON.parse(input); } catch (e) { process.exit(0); }

  const filePath = hookData.tool_input?.file_path || hookData.tool_input?.path || '';
  if (!filePath.includes('plan') || !filePath.endsWith('.md')) process.exit(0);

  // Check if file exists and has content
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Warn if using filename as link text instead of human-readable
    const fileLinks = content.match(/\[phase-\d+[^\]]*\]/g);
    if (fileLinks && fileLinks.length > 0) {
      console.error(`
\x1b[33mPLAN FORMAT\x1b[0m: Use human-readable titles in plan links.
  Found: ${fileLinks[0]}
  Better: [Phase 1: Database Setup](./phase-01-database.md)
`);
    }

    // Warn if no status markers
    if (!content.includes('[ ]') && !content.includes('[x]') && !content.includes('[/]')) {
      console.error(`
\x1b[33mPLAN FORMAT\x1b[0m: Plan has no status markers.
  Use: [ ] todo, [/] in progress, [x] done
`);
    }
  } catch (e) {}

  process.exit(0);
}

main().catch(() => process.exit(0));
