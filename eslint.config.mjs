import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import reactNativeCommunity from '@react-native-community/eslint-config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, es2021: true },
    },
    plugins: { react: pluginReact },
    rules: {
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

  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactNativeCommunity,
]);