#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
node <<'NODE'
const { execSync } = require('child_process');
const pkg = require('./package.json');
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
const outdated = [];
for (const [name, range] of Object.entries(deps)) {
  try {
    const out = execSync(`yarn npm info ${JSON.stringify(name)} version`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
    const latest = out.split('\n').pop().trim();
    const locked = execSync(`yarn info ${JSON.stringify(name)} version 2>/dev/null || true`, {
      encoding: 'utf8',
    }).trim();
    const current = locked.split('\n').find((l) => l.includes('Version:'))?.replace(/.*Version:\s*/, '') || latest;
    if (latest && current && latest !== current) {
      outdated.push({ name, range, current, latest });
    }
  } catch (e) {
    // skip
  }
}
outdated.sort((a, b) => a.name.localeCompare(b.name));
for (const item of outdated) {
  console.log(`${item.name}\t${item.current}\t${item.latest}\t${item.range}`);
}
NODE
