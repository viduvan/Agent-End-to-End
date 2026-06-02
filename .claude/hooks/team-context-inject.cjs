#!/usr/bin/env node
/** team-context-inject.cjs — Inject team context for subagent */
const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8').trim();
  // Placeholder: inject team member info, roles, current sprint context
  process.exit(0);
} catch (e) { process.exit(0); }
