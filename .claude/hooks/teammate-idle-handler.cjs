#!/usr/bin/env node
/** teammate-idle-handler.cjs — Detect agent idle/stuck */
const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8').trim();
  // Placeholder: detect if agent has been idle too long
  // In production, check timestamp of last tool call vs now
  process.exit(0);
} catch (e) { process.exit(0); }
