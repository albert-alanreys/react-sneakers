import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				// Browser globals
				...Object.fromEntries(
					Object.entries(globals.browser).map(([key]) => [key, 'readonly']),
				),

				// Project-specific custom globals
				_: 'readonly',

				// Node.js globals (e.g., for Vite config)
				__dirname: 'readonly',
				module: 'readonly',
				process: 'readonly',
			},
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
					exportConditions: ['production', 'import', 'default'],
				},
				alias: {
					map: [['@', './src']],
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
	},
];
