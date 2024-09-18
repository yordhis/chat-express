import globals from 'globals'
import pluginJs from '@eslint/js'
// const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'


export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: { globals: globals.browser }},
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": [
        "off",
        {},
        {
          "usePrettierrc": false
        }
      ],
      'quotes':[
        'error',
        'single' // Lo que quiero permitir
      ],
      'semi':['error', 'never'],
      'no-unused-vars': 'error',
      'no-undef': 'error',
    }
  },
  
]