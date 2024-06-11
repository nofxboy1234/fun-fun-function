import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  pluginJs.configs.recommended,
  {
    ignores: ['**/node_modules/', '**/dist/', 'package-lock.json'],
  },
];
