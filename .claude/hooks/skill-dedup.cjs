#!/usr/bin/env node
/** skill-dedup.cjs — Deduplicate loaded skills in session */
const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8').trim();
  // Placeholder: track which skills have been loaded, prevent double-loading
  process.exit(0);
} catch (e) { process.exit(0); }
