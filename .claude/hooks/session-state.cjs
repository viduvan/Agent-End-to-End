#!/usr/bin/env node
/**
 * session-state.cjs — Lưu/restore session state
 * 
 * Hook Type: SessionStart, SessionStop, SubagentStop
 * Trigger: Session lifecycle events
 * 
 * Saves progress, active plan, changed files to .claude/.session-state.json
 */

const fs = require('fs');
const path = require('path');

const STATE_FILE = path.join(process.cwd(), '.claude', '.session-state.json');

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  } catch (e) {
    return { sessions: [], lastPlan: null, lastFiles: [] };
  }
}

function saveState(state) {
  try {
    const dir = path.dirname(STATE_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
  } catch (e) {
    console.error(`\x1b[33mWARN\x1b[0m: Could not save session state`);
  }
}

try {
  const hookInput = fs.readFileSync(0, 'utf-8').trim();
  const data = hookInput ? JSON.parse(hookInput) : {};
  const source = data.source || 'startup';
  const state = loadState();

  state.sessions.push({
    timestamp: new Date().toISOString(),
    source,
    cwd: process.cwd(),
  });

  // Keep only last 20 sessions
  if (state.sessions.length > 20) {
    state.sessions = state.sessions.slice(-20);
  }

  saveState(state);
  console.error(`\x1b[36m[session-state]\x1b[0m Saved (${source})`);
  process.exit(0);
} catch (e) {
  process.exit(0);
}
