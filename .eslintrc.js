module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  parserOptions: {
//    parser: 'babel-eslint'
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    //'@typescript-eslint/no-unused-vars': 'error',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": 0,
    "no-console": 'off'
  }
}
