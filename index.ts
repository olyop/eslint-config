// import type { TSESLint } from "@typescript-eslint/utils";

// const configuration: TSESLint.Linter.ConfigType = {
const configuration = {
	plugins: ["node", "json", "promise", "prefer-arrow", "unicorn", "@typescript-eslint"],
	extends: [
		"airbnb-base",
		"airbnb-typescript/base",
		"plugin:node/recommended",
		"plugin:json/recommended",
		"plugin:promise/recommended",
		"plugin:@typescript-eslint/strict",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:unicorn/recommended",
		"prettier",
	],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	env: {
		es2022: true,
	},
	rules: {
		"semi": "off",
		"radix": "off",
		"no-tabs": "off",
		"one-var": "off",
		"no-console": "off",
		"quote-props": "off",
		"no-lonely-if": "off",
		"comma-dangle": "off",
		"default-case": "off",
		"padded-blocks": "off",
		"comma-spacing": "off",
		"no-unused-vars": "off",
		"no-else-return": "off",
		"unicorn/no-null": "off",
		"no-array-reduce": "off",
		"no-await-in-loop": "off",
		"import/extensions": "off",
		"no-nested-ternary": "off",
		"node/no-process-env": "off",
		"no-use-before-define": "off",
		"object-curly-newline": "off",
		"no-restricted-syntax": "off",
		"array-bracket-spacing": "off",
		"unicorn/prefer-switch": "off",
		"no-restricted-globals": "off",
		"function-paren-newline": "off",
		"unicorn/prefer-ternary": "off",
		"node/no-missing-import": "off",
		"promise/catch-or-return": "off",
		"unicorn/no-array-reduce": "off",
		"no-mixed-spaces-and-tabs": "off",
		"implicit-arrow-linebreak": "off",
		"@typescript-eslint/indent": "off",
		"unicorn/no-array-for-each": "off",
		"node/no-unpublished-import": "off",
		"unicorn/prefer-export-from": "off",
		"unicorn/switch-case-braces": "off",
		"lines-between-class-members": "off",
		"import/prefer-default-export": "off",
		"unicorn/no-useless-undefined": "off",
		"unicorn/prefer-query-selector": "off",
		"@typescript-eslint/comma-spacing": "off",
		"unicorn/no-abusive-eslint-disable": "off",
		"import/no-extraneous-dependencies": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"unicorn/no-array-callback-reference": "off",
		"@typescript-eslint/prefer-regexp-exec": "off",
		"node/no-unsupported-features/es-syntax": "off",
		"unicorn/unicorn/consistent-function-scoping": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"no-dupe-keys": "error",
		"eol-last": ["error", "always"],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/comma-dangle": ["error", "always-multiline"],
		"arrow-parens": ["error", "as-needed"],
		"unicorn/prevent-abbreviations": [
			"error",
			{
				"replacements": {
					"ref": false,
					"var": false,
					"arg": false,
					"args": false,
					"prev": false,
					"temp": false,
					"vars": false,
					"prop": false,
					"props": false,
					"param": false,
					"params": false,
				},
			},
		],
		"@typescript-eslint/no-invalid-void-type": [
			"error",
			{
				"allowAsThisParameter": false,
				"allowInGenericTypeArguments": true,
			},
		],
		"prefer-arrow/prefer-arrow-functions": [
			"warn",
			{
				"disallowPrototype": true,
				"singleReturnOnly": false,
				"classPropertiesAllowed": false,
			},
		],
		"no-void": [
			"error",
			{
				"allowAsStatement": true,
			},
		],
		"@typescript-eslint/no-floating-promises": [
			"error",
			{
				"ignoreVoid": true,
			},
		],
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				"checksVoidReturn": true,
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"args": "after-used",
				"ignoreRestSiblings": true,
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
					"delimiter": "semi",
				},
				"singleline": {
					"delimiter": "semi",
					"requireLast": false,
				},
			},
		],
		"no-underscore-dangle": [
			"error",
			{
				"allow": ["__typename", "__resolveType"],
			},
		],
		"max-len": [
			"error",
			{
				"code": 120,
				"tabWidth": 2,
				"ignoreUrls": true,
				"ignoreStrings": true,
				"ignoreRegExpLiterals": true,
				"ignoreTemplateLiterals": true,
			},
		],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
				"maxBOF": 0,
				"maxEOF": 1,
			},
		],
	},
};

export default configuration;
