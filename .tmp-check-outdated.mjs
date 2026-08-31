import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))
const deps = { ...pkg.dependencies, ...pkg.devDependencies }

for (const [name, range] of Object.entries(deps)) {
  try {
    const out = execSync(`yarn npm info ${JSON.stringify(name)} --fields version`, {
      encoding: 'utf8',
    })
    const match = out.match(/version['"]?\s*:\s*['"]([^'"]+)['"]/)
    const latest = match ? match[1] : '?'
    console.log(`${name}\t${range}\t${latest}`)
  } catch {
    console.log(`${name}\t${range}\tERROR`)
  }
}
