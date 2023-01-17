module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint', 'promise', 'prettier'],
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:promise/recommended',
		'plugin:prettier/recommended'
	],
	rules: {
		// indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		// 'no-tabs': 0
	}
};
