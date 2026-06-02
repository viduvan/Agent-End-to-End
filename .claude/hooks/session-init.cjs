#!/usr/bin/env node
/**
 * session-init.cjs — Khởi tạo session environment
 * 
 * Hook Type: SessionStart
 * Trigger: Khi session bắt đầu (startup, resume, clear, compact)
 * 
 * Actions: Detect project type, package manager, framework, output context
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function execSafe(cmd, timeout = 3000) {
  try {
    return execSync(cmd, { encoding: 'utf8', timeout, stdio: ['pipe','pipe','pipe'] }).trim();
  } catch (e) { return null; }
}

function detectProjectType() {
  if (fs.existsSync('pyproject.toml') || fs.existsSync('setup.py')) return 'python';
  if (fs.existsSync('pnpm-workspace.yaml') || fs.existsSync('lerna.json')) return 'monorepo';
  if (fs.existsSync('package.json')) {
    try {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (pkg.workspaces) return 'monorepo';
      return 'nodejs';
    } catch (e) {}
  }
  if (fs.existsSync('go.mod')) return 'golang';
  if (fs.existsSync('Cargo.toml')) return 'rust';
  return 'unknown';
}

function detectPackageManager() {
  if (fs.existsSync('poetry.lock')) return 'poetry';
  if (fs.existsSync('Pipfile.lock')) return 'pipenv';
  if (fs.existsSync('requirements.txt')) return 'pip';
  if (fs.existsSync('bun.lockb')) return 'bun';
  if (fs.existsSync('pnpm-lock.yaml')) return 'pnpm';
  if (fs.existsSync('yarn.lock')) return 'yarn';
  if (fs.existsSync('package-lock.json')) return 'npm';
  return null;
}

function detectFramework() {
  // Python frameworks
  if (fs.existsSync('pyproject.toml')) {
    try {
      const content = fs.readFileSync('pyproject.toml', 'utf8');
      if (content.includes('fastapi')) return 'fastapi';
      if (content.includes('django')) return 'django';
      if (content.includes('flask')) return 'flask';
      if (content.includes('langgraph')) return 'langgraph';
    } catch (e) {}
  }
  // JS frameworks
  if (fs.existsSync('package.json')) {
    try {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const deps = { ...pkg.dependencies, ...pkg.devDependencies };
      if (deps['next']) return 'next';
      if (deps['nuxt']) return 'nuxt';
      if (deps['react']) return 'react';
      if (deps['vue']) return 'vue';
      if (deps['express']) return 'express';
    } catch (e) {}
  }
  return null;
}

function getGitInfo() {
  const branch = execSafe('git branch --show-current');
  const remote = execSafe('git config --get remote.origin.url');
  return { branch, remote };
}

try {
  const projectType = detectProjectType();
  const pm = detectPackageManager();
  const framework = detectFramework();
  const git = getGitInfo();
  const pythonVer = execSafe('python3 --version') || execSafe('python --version');

  const parts = [`Project: ${projectType}`];
  if (pm) parts.push(`PM: ${pm}`);
  if (framework) parts.push(`Framework: ${framework}`);
  if (git.branch) parts.push(`Branch: ${git.branch}`);
  if (pythonVer) parts.push(pythonVer);

  console.error(`\x1b[36m[session-init]\x1b[0m ${parts.join(' | ')}`);
  process.exit(0);
} catch (e) {
  process.exit(0);
}
