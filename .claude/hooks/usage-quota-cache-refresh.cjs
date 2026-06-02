#!/usr/bin/env node
/** usage-quota-cache-refresh.cjs — Refresh quota cache after tool calls */
const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8').trim();
  // Placeholder: refresh cached quota info
  process.exit(0);
} catch (e) { process.exit(0); }
