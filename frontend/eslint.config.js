import { eslintReactConfig } from '@flippo/eslint';

import pluginEffector from 'eslint-plugin-effector';
import pluginStorybook from 'eslint-plugin-storybook';

/** @type {import('eslint').Linter.Config[]} */
export default eslintReactConfig(import.meta.dirname).append(
  ...pluginStorybook.configs['flat/recommended'],
  {
    plugins: {
      effector: pluginEffector
    },
    rules: {
      ...pluginEffector.configs.react.rules,
      'react-refresh/only-export-components': 'off'
    }
  },
  {
    files: ['**/tests/*.testplane.js', '**/tests/*.testplane.ts'],
    rules: {
      '@typescript-eslint/await-thenable': 'off',
      'no-undef': 'off'
    }
  }
);
