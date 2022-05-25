module.exports = {
  'env': {
    'vue/setup-compiler-macros': true,
    "browser": true,
    "es2021": true,
    "node": true
  },
  'plugins': ['prettier'],
  'extends': [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    "plugin:prettier/recommended"
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    "prettier/prettier": ["error", { "singleQuote": true, "semi": false }],
    'no-unused-vars': 'off',
    'node/no-deprecated-api': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multiline-html-element-content-newline': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars': 'off',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 'off',
    'no-case-declarations': 'off',
    camelcase: 'off',
    curly: 0,
    'dot-notation': 0,
    'nuxt/no-cjs-in-config': 'off',
    'vue/max-attributes-per-line': ['warn', {
      singleline: 2,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  },

}
