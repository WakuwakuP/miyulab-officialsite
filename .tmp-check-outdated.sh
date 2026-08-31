#!/bin/bash
cd "$(dirname "$0")"
pkg=$(node -p "JSON.stringify({...require('./package.json').dependencies,...require('./package.json').devDependencies})")
node <<'NODE'
const { execSync } = require('child_process');
const pkg = {...require('./package.json').dependencies, ...require('./package.json').devDependencies};
for (const [name, range] of Object.entries(pkg)) {
  try {
    const out = execSync(`yarn npm info ${JSON.stringify(name)} --fields version`, { encoding: 'utf8' });
    const match = out.match(/version['"]?\s*:\s*['"]([^'"]+)['"]/);
    const latest = match ? match[1] : '?';
    const locked = execSync(`node -e "const l=require('./yarn.lock'); console.log('skip')" 2>/dev/null || true`, { encoding: 'utf8' });
    console.log(`${name}\t${range}\t${latest}`);
  } catch (e) {
    console.log(`${name}\t${range}\tERROR`);
  }
}
NODE
