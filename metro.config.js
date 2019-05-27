module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs'],
  },
}
