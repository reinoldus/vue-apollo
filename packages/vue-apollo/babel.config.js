module.exports = {
  presets: [
    [require('@babel/preset-env'), { modules: false }],
  ],
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    // 'module:graphql-tag',
    [require('@babel/plugin-transform-for-of'), { assumeArray: true }],
  ],
}
