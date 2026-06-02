#!/usr/bin/env node
/**
 * scout-block.cjs — Chặn đọc thư mục cấm (node_modules, dist, .next)
 * 
 * Hook Type: PreToolUse
 * Trigger: Khi agent đọc file trong directories bị block
 * 
 * Cho phép: npm build, pnpm install, yarn test (build commands)
 * Chặn: cd node_modules, cat dist/file.js, ls .next/
 */

const fs = require('fs');
const path = require('path');

// Default blocked directories
const DEFAULT_BLOCKED = [
  'node_modules/',
  'dist/',
  'build/',
  '.next/',
  '.nuxt/',
  '.output/',
  '__pycache__/',
  '.pytest_cache/',
  '.mypy_cache/',
  '.ruff_cache/',
  'venv/',
  '.venv/',
  'env/',
  '.tox/',
  'htmlcov/',
  '.coverage',
  '*.egg-info/',
];

// Build commands that should be allowed
const BUILD_CMD = /^(npm|pnpm|yarn|bun)\s+([^\s]+\s+)*(run\s+)?(build|test|lint|dev|start|install|ci)/;
const TOOL_CMD = /^(npx|pnpx|bunx|tsc|esbuild|vite|webpack|jest|vitest|pytest|ruff|mypy)/;

function loadIgnorePatterns() {
  const ckignorePath = path.join(process.cwd(), '.claude', '.ckignore');
  try {
    return fs.readFileSync(ckignorePath, 'utf8')
      .split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#'));
  } catch (e) {
    return DEFAULT_BLOCKED;
  }
}

function isBlockedPath(testPath, patterns) {
  if (!testPath) return false;
  const normalized = testPath.replace(/\\/g, '/');
  return patterns.some(pattern => {
    const clean = pattern.replace(/\/$/, '');
    return normalized.includes(`/${clean}/`) || 
           normalized.startsWith(`${clean}/`) ||
           normalized === clean;
  });
}

function isBuildCommand(command) {
  if (!command) return false;
  const trimmed = command.trim();
  return BUILD_CMD.test(trimmed) || TOOL_CMD.test(trimmed);
}

function extractPaths(toolInput) {
  const paths = [];
  if (!toolInput) return paths;
  if (toolInput.file_path) paths.push(toolInput.file_path);
  if (toolInput.path) paths.push(toolInput.path);
  if (toolInput.pattern) paths.push(toolInput.pattern);
  if (toolInput.command && !isBuildCommand(toolInput.command)) {
    // Extract paths from bash commands
    const words = toolInput.command.split(/\s+/);
    words.forEach(w => {
      if (w.includes('/') || w.includes('.')) paths.push(w);
    });
  }
  return paths.filter(Boolean);
}

try {
  const hookInput = fs.readFileSync(0, 'utf-8');
  if (!hookInput.trim()) process.exit(0);

  const data = JSON.parse(hookInput);
  if (!data.tool_input) process.exit(0);

  // Allow build commands
  if (data.tool_input.command && isBuildCommand(data.tool_input.command)) {
    process.exit(0);
  }

  const patterns = loadIgnorePatterns();
  const paths = extractPaths(data.tool_input);

  for (const p of paths) {
    if (isBlockedPath(p, patterns)) {
      console.error(`
\x1b[33mSCOUT BLOCK\x1b[0m: Blocked access to "${p}"
  Directory is in .ckignore — reading would pollute context.
  Use specific file paths instead of browsing directories.
  Config: .claude/.ckignore
`);
      process.exit(2);
    }
  }
  process.exit(0);
} catch (e) {
  process.exit(0); // Fail-open
}
