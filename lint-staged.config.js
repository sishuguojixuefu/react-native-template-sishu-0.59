module.exports = {
  linters: {
    'app/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'git add'],
    '**/*.{md,json}': ['prettier --write', 'git add'],
  },
  ignore: ['**/*.d.ts'],
}
