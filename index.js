module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:promise/recommended",
		"plugin:import/typescript",
		"plugin:node/recommended",
	],
	plugins: [
		"node",
		"import",
		"promise",
		"@typescript-eslint",
	],
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: { jsx: true },
		project: "./tsconfig.eslint.json",
	},
	env: {
		node: true,
		es2020: true,
		browser: true,
	},
	settings: {
		react: {
			pragma: "createElement",
		},
	},
	rules: {
		"radix": "off",
		"no-tabs": "off",
		"no-console": "off",
		"arrow-parens": "off",
		"no-unused-vars": "off",
		"no-else-return": "off",
		"react/prop-types": "off",
		"no-await-in-loop": "off",
		"no-nested-ternary": "off",
		"node/no-process-env": "off",
		"object-curly-newline": "off",
		"no-restricted-syntax": "off",
		"jsx-a11y/no-autofocus": "off",
		"no-restricted-globals": "off",
		"array-bracket-spacing": "off",
		"node/no-missing-import": "off",
		"react/no-children-prop": "off",
		"promise/catch-or-return": "off",
		"implicit-arrow-linebreak": "off",
		"jsx-a11y/media-has-caption": "off",
		"react/no-unused-prop-types": "off",
		"node/no-unpublished-import": "off",
		"react-hooks/exhaustive-deps": "off",
		"react/require-default-props": "off",
		"lines-between-class-members": "off",
		"import/prefer-default-export": "off",
		"@typescript-eslint/comma-spacing": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"@typescript-eslint/prefer-regexp-exec": "off",
		"jsx-a11y/control-has-associated-label": "off",
		"node/no-unsupported-features/es-syntax": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs"
		],
		"import/extensions": [
			"error",
			"never"
		],
		"eol-last": [
			"error",
			"never"
		],
		"react/jsx-indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"operator-linebreak": [
			"error",
			"after"
		],
		"react/jsx-indent-props": [
			"error",
			"tab"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"react/jsx-fragments": [
			"error",
			"element"
		],
		"@typescript-eslint/semi": [
			"error",
			"never"
		],
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"@typescript-eslint/quotes": [
			"error",
			"double"
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				args: "none",
			},
		],
		"react/jsx-no-duplicate-props": [
			"error",
			{
				ignoreCase: false,
			},
		],
		"@typescript-eslint/comma-dangle": [
			"error",
			"only-multiline"
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
		"react/jsx-tag-spacing": [
			"error",
			{ beforeSelfClosing: "never" },
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