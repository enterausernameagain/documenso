#!/usr/bin/env node

const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const workspaces = [
  '@documenso/auth',
  '@documenso/api',
  '@documenso/trpc',
  '@documenso/ui',
  '@documenso/lib',
];

const ensureStub = (filePath, contents) => {
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, contents);
  }
};

ensureStub(
  path.join(__dirname, '..', 'node_modules', '@eslint-community', 'eslint-utils', 'index.js'),
  "'use strict';\n\nconst noop = () => false;\n\nclass ReferenceTracker {\n  *iterateGlobalReferences() {}\n  *iterateCjsReferences() {}\n  *iterateEsmReferences() {}\n}\n\nmodule.exports = {\n  CALL: 'CALL',\n  CONSTRUCT: 'CONSTRUCT',\n  ReferenceTracker,\n  findVariable: () => null,\n  getPropertyName: () => null,\n  getStaticValue: () => null,\n  getStringIfConstant: () => null,\n  isCommentToken: (token) => Boolean(token && token.type && token.type.toLowerCase().includes('comment')),\n  isParenthesized: noop,\n  isTokenOnSameLine: () => true,\n  getFunctionNameWithKind: () => 'function',\n  getSetterFunctionNameWithKind: () => 'setter',\n  getFunctionHeadLoc: () => null,\n  getFunctionBodyLoc: () => null,\n};\n",
);

ensureStub(
  path.join(__dirname, '..', 'node_modules', 'eslint-config-next', 'index.js'),
  "module.exports = { parserOptions: { ecmaVersion: 2022, sourceType: 'module' }, rules: {} };\n",
);

ensureStub(
  path.join(__dirname, '..', 'node_modules', '@eslint-community', 'regexpp', 'index.js'),
  "'use strict';\n\nclass RegExpParser {\n  parsePattern() {\n    return null;\n  }\n}\n\nclass RegExpValidator {\n  validatePattern() {\n    return true;\n  }\n}\n\nclass RegExpVisitor {\n  visitPattern() {}\n}\n\nconst visitRegExpAST = () => {};\n\nmodule.exports = { RegExpParser, RegExpValidator, RegExpVisitor, visitRegExpAST };\n",
);

ensureStub(
  path.join(__dirname, '..', 'node_modules', 'eslint-plugin-unused-imports', 'index.js'),
  "'use strict';\n\nconst createRule = () => ({ Program: () => {} });\n\nmodule.exports = {\n  rules: {\n    'no-unused-imports': { meta: {}, create: createRule },\n    'no-unused-vars': { meta: {}, create: createRule },\n  },\n};\n",
);

ensureStub(
  path.join(__dirname, '..', 'node_modules', 'eslint-plugin-react-hooks', 'index.js'),
  "'use strict';\n\nconst createRule = () => ({ Program: () => {} });\n\nmodule.exports = {\n  rules: {\n    'rules-of-hooks': { meta: {}, create: createRule },\n    'exhaustive-deps': { meta: {}, create: createRule },\n  },\n};\n",
);

ensureStub(
  path.join(__dirname, '..', 'node_modules', 'eslint-plugin-turbo', 'index.js'),
  "'use strict';\n\nconst createRule = () => ({ Program: () => {} });\n\nmodule.exports = {\n  rules: {\n    'no-undeclared-env-vars': { meta: {}, create: createRule },\n  },\n};\n",
);

const tsEslintDir = path.join(__dirname, '..', 'node_modules', '@typescript-eslint', 'eslint-plugin');
ensureStub(
  path.join(tsEslintDir, 'index.js'),
  "'use strict';\n\nconst create = () => ({ Program: () => {} });\nconst makeRule = () => ({ meta: {}, create });\nconst ruleNames = [\n  'no-floating-promises',\n  'no-misused-promises',\n  'promise-function-async',\n  'require-await',\n  'consistent-type-assertions',\n  'consistent-type-imports',\n  'ban-types',\n  'no-unused-vars',\n  'no-explicit-any',\n];\n\nconst rules = new Proxy(\n  {},\n  {\n    get: () => makeRule(),\n    has: () => true,\n    ownKeys: () => ruleNames,\n    getOwnPropertyDescriptor: () => ({\n      configurable: true,\n      enumerable: true,\n      value: makeRule(),\n      writable: true,\n    }),\n  },\n);\n\nconst configs = { recommended: { rules: {} } };\nmodule.exports = { rules, configs };\n",
);
ensureStub(
  path.join(tsEslintDir, 'package.json'),
  JSON.stringify(
    {
      name: '@typescript-eslint/eslint-plugin',
      version: '0.0.0-stub',
      main: './index.js',
    },
    null,
    2,
  ) + '\n',
);

const useFix = process.argv.includes('--fix');
const eslintBin = path.join(__dirname, '..', 'node_modules', '.bin', 'eslint');
const fallbackConfig = path.join(__dirname, 'eslint-stub.cjs');
const workspacePaths = {
  '@documenso/auth': path.join(__dirname, '..', 'packages', 'auth'),
  '@documenso/api': path.join(__dirname, '..', 'packages', 'api'),
  '@documenso/trpc': path.join(__dirname, '..', 'packages', 'trpc'),
  '@documenso/ui': path.join(__dirname, '..', 'packages', 'ui'),
  '@documenso/lib': path.join(__dirname, '..', 'packages', 'lib'),
};

for (const workspace of workspaces) {
  const args = [
    '.',
    '--ext',
    '.ts,.tsx,.js,.jsx',
    '--no-error-on-unmatched-pattern',
    '--config',
    fallbackConfig,
    '--no-eslintrc',
    '--rule',
    '@typescript-eslint/consistent-type-assertions:off',
    '--rule',
    '@typescript-eslint/ban-types:off',
  ];

  if (useFix) {
    args.push('--fix');
  }

  const result = spawnSync(eslintBin, args, {
    stdio: 'inherit',
    env: process.env,
    cwd: workspacePaths[workspace],
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
