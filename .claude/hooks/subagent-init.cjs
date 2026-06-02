#!/usr/bin/env node
/**
 * subagent-init.cjs — Inject context cho subagent
 * 
 * Hook Type: SubagentStart
 * Trigger: Khi spawn subagent
 * 
 * Inject: project paths, plan location, agent-specific instructions
 */

const fs = require('fs');
const path = require('path');

try {
  const hookInput = fs.readFileSync(0, 'utf-8').trim();
  const data = hookInput ? JSON.parse(hookInput) : {};
  
  const projectRoot = process.cwd();
  const claudeDir = path.join(projectRoot, '.claude');
  
  // Find active plan
  let activePlan = null;
  const plansDir = path.join(projectRoot, 'plans');
  if (fs.existsSync(plansDir)) {
    const plans = fs.readdirSync(plansDir)
      .filter(f => fs.statSync(path.join(plansDir, f)).isDirectory())
      .sort()
      .reverse();
    if (plans.length > 0) {
      activePlan = path.join(plansDir, plans[0], 'plan.md');
    }
  }

  const context = {
    projectRoot,
    claudeDir,
    activePlan,
    locale: 'vi-VN',
    timestamp: new Date().toISOString(),
  };

  console.error(`\x1b[36m[subagent-init]\x1b[0m Project: ${projectRoot}${activePlan ? ` | Plan: ${activePlan}` : ''}`);
  process.exit(0);
} catch (e) {
  process.exit(0);
}
