import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, es2021: true },
    },
    plugins: { react, prettier },
    rules: {
      'prettier/prettier': 'error',
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx'] },
      ],
      'no-use-before-define': [
        'error',
        { functions: true, classes: true, variables: false },
      ],
    },
  },

  
]);