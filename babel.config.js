module.exports = {
  presets: ['@babel/typescript', ['@babel/react', {runtime: 'automatic'}], '@babel/env'],
  plugins: ['@babel/plugin-transform-nullish-coalescing-operator', '@babel/plugin-transform-optional-chaining'],
};
