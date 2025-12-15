#!/usr/bin/env node
const { spawnSync } = require('node:child_process');

const taskArgs = process.argv.slice(2);

const turboBin = (() => {
  try {
    return require.resolve('turbo/bin/run');
  } catch (error) {
    return null;
  }
})();

if (turboBin) {
  const turboResult = spawnSync(process.execPath, [turboBin, 'run', ...taskArgs], {
    stdio: 'inherit',
  });

  process.exit(turboResult.status ?? 1);
}

console.warn('[turbo fallback]: turbo not installed; running workspace scripts sequentially.');

const fallbackResult = spawnSync(
  'npm',
  ['run', '--workspaces', '--if-present', '--include-workspace-root=false', ...taskArgs],
  {
    stdio: 'inherit',
  },
);

process.exit(fallbackResult.status ?? 1);
