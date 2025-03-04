import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginSort from 'eslint-plugin-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  pluginSort.configs['flat/recommended'],
  {
    rules: {
      'sort/imports': [
        'warn',
        {
          groups: [
            // Почему-то группировка не работает. Видимо, ошибся в регулярках
            { type: 'side-effect', order: 10 },
            { type: 'dependency', order: 20 },
            { regex: `^(.*)\/app'$`, order: 30 },
            { regex: `^(.*)\/screens?(.*)'$`, order: 40 },
            { regex: `^(.*)\/layouts'$`, order: 50 },
            { regex: `^(.*)\/widgets'$`, order: 60 },
            { regex: `^(.*)\/features'$`, order: 70 },
            { regex: `^(.*)\/entities'$`, order: 80 },
            { regex: `^(.*)\/shared?(.*)$`, order: 90 },
            { type: 'other', order: 100 },
          ],
          separator: '\n',
        },
      ],
    },
  },
  {
    files: ['**/index.ts'],
    rules: {
      'sort/exports': [
        'error',
        {
          groups: [],
          typeOrder: 'preserve',
          caseSensitive: false,
          natural: true,
        },
      ],
    },
  },
  {
    rules: {
      'sort/object-properties': 'off',
    },
  }
)
