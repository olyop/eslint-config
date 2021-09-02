module.exports = {
	extends: [
		"airbnb",
		"airbnb-typescript",
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
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"radix": "off",
		"no-tabs": "off",
		"no-console": "off",
		"quote-props": "off",
		"arrow-parens": "off",
		"no-lonely-if": "off",
		"no-unused-vars": "off",
		"no-else-return": "off",
		"no-await-in-loop": "off",
		"react/prop-types": "off",
		"no-nested-ternary": "off",
		"node/no-process-env": "off",
		"object-curly-newline": "off",
		"no-restricted-syntax": "off",
		"no-restricted-globals": "off",
		"array-bracket-spacing": "off",
		"jsx-a11y/no-autofocus": "off",
		"node/no-missing-import": "off",
		"react/no-children-prop": "off",
		"promise/catch-or-return": "off",
		"implicit-arrow-linebreak": "off",
		"node/no-unpublished-import": "off",
		"jsx-a11y/media-has-caption": "off",
		"react/no-unused-prop-types": "off",
		"lines-between-class-members": "off",
		"react-hooks/exhaustive-deps": "off",
		"react/require-default-props": "off",
		"import/prefer-default-export": "off",
		"react/jsx-props-no-spreading": "off",
		"@typescript-eslint/comma-spacing": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/prefer-regexp-exec": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"jsx-a11y/control-has-associated-label": "off",
		"node/no-unsupported-features/es-syntax": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/jsx-indent": [
			"error",
			"tab",
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/jsx-fragments": [
			"error",
			"element",
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
			{ args: "none" },
		],
		"@typescript-eslint/comma-dangle": [
			"error",
			"only-multiline",
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
				filter: {
					match: false,
					regex: "(__typename|_)",
				},
				selector: "variableLike",
				format: ["PascalCase", "camelCase", "UPPER_CASE"],
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
				ignoredNodes: ["TSTypeParameterInstantiation"]
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