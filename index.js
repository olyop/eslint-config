module.exports = {
	extends: [
		"airbnb-typescript/base",
		"plugin:node/recommended",
		"plugin:promise/recommended",
	],
	plugins: [
		"node",
		"promise",
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},
	rules: {
		"radix": "off",
		"no-tabs": "off",
		"no-console": "off",
		"arrow-parens": "off",
		"no-unused-vars": "off",
		"no-else-return": "off",
		"no-await-in-loop": "off",
		"no-nested-ternary": "off",
		"node/no-process-env": "off",
		"object-curly-newline": "off",
		"no-restricted-syntax": "off",
		"no-restricted-globals": "off",
		"array-bracket-spacing": "off",
		"node/no-missing-import": "off",
		"promise/catch-or-return": "off",
		"implicit-arrow-linebreak": "off",
		"lines-between-class-members": "off",
		"import/prefer-default-export": "off",
		"@typescript-eslint/comma-spacing": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/prefer-regexp-exec": "off",
		"node/no-unsupported-features/es-syntax": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs",
		],
		"import/extensions": [
			"error",
			"never",
		],
		"eol-last": [
			"error",
			"never",
		],
		"linebreak-style": [
			"error",
			"windows",
		],
		"operator-linebreak": [
			"error",
			"after",
		],
		"object-curly-spacing": [
			"error",
			"always",
		],
		"@typescript-eslint/semi": [
			"error",
			"never",
		],
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"@typescript-eslint/quotes": [
			"error",
			"double",
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				args: "none",
			},
		],
		"@typescript-eslint/comma-dangle": [
			"error",
			"only-multiline",
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				filter: {
					match: false,
					regex: "(__typename|_)",
				},
				selector: "variableLike",
				format: ["StrictPascalCase", "strictCamelCase", "UPPER_CASE"],
			},
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				multiline: {
					requireLast: true,
					delimiter: "comma",
				},
				singleline: {
					delimiter: "comma",
					requireLast: false,
				},
			},
		],
		"no-underscore-dangle": [
			"error",
			{ allow: ["__typename", "__resolveType"] },
		],
		"max-len": [
			"error",
			{ code: 120 },
		],
		"@typescript-eslint/indent": [
			"error",
			"tab",
			{
				SwitchCase: 1,
				MemberExpression: "off",
			},
		],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 1,
				maxBOF: 0,
			},
		],
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
				optionalDependencies: false,
			},
		]
	}
}