module.exports = {
	extends: [
		"airbnb-base",
		"airbnb-typescript/base",
		"plugin:node/recommended",
		"plugin:promise/recommended",
		"plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	plugins: [
		"node",
		"promise",
	],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
	},
	rules: {
		"radix": "off",
		"no-tabs": "off",
		"one-var": "off",
		"no-console": "off",
		"arrow-parens": "off",
		"no-lonely-if": "off",
		"comma-dangle": "off",
		"default-case": "off",
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
		"node/no-unpublished-import": "off",
		"lines-between-class-members": "off",
		"import/prefer-default-export": "off",
		"@typescript-eslint/comma-spacing": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/prefer-regexp-exec": "off",
		"node/no-unsupported-features/es-syntax": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"quote-props": [
			"error",
			"consistent-as-needed"
		],
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
			"unix",
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
		"@typescript-eslint/quotes": [
			"error",
			"double",
		],
		"no-void": [
			"error",
			{
				"allowAsStatement": true
			}
		],
		"@typescript-eslint/comma-dangle": [
			"error",
			"always-multiline"
		],
		"@typescript-eslint/no-floating-promises": [
			"error",
			{
				"ignoreVoid": true
			}
		],
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				"checksVoidReturn": true
			}
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"args": "none"
			},
		],
		"import/order": [
			"error",
			{
				"groups": [
					["builtin", "external", "internal", "type"],
					["parent", "sibling", "index"]
				],
				"newlines-between": "always-and-inside-groups"
			},
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				"filter": {
					"match": false,
					"regex": "(__typename|_)",
				},
				"selector": "variableLike",
				"format": ["PascalCase", "camelCase", "UPPER_CASE"],
			},
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"requireLast": true,
					"delimiter": "comma",
				},
				"singleline": {
					"delimiter": "comma",
					"requireLast": false,
				},
			},
		],
		"no-underscore-dangle": [
			"error",
			{
				"allow": ["__typename", "__resolveType"]
			},
		],
		"max-len": [
			"error",
			{
				"code": 120,
			},
		],
		"@typescript-eslint/indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1,
				"MemberExpression": "off",
				"ignoredNodes": ["TSTypeParameterInstantiation"]
			},
		],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
				"maxEOF": 1,
				"maxBOF": 0,
			},
		],
		"import/no-extraneous-dependencies": [
			"error",
			{
				"devDependencies": true,
				"optionalDependencies": false,
			},
		]
	}
}