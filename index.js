"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration = {
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:node/recommended",
        "plugin:json/recommended",
        "plugin:import/recommended",
        "plugin:promise/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:unicorn/recommended",
        "prettier",
    ],
    plugins: ["node", "json", "import", "promise", "prefer-arrow", "unicorn", "@typescript-eslint"],
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
        "no-lonely-if": "off",
        "comma-dangle": "off",
        "default-case": "off",
        "comma-spacing": "off",
        "no-unused-vars": "off",
        "no-else-return": "off",
        "unicorn/no-null": "off",
        "no-array-reduce": "off",
        "no-await-in-loop": "off",
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
        "unicorn/no-useless-undefined": "off",
        "import/prefer-default-export": "off",
        "unicorn/prefer-query-selector": "off",
        "@typescript-eslint/comma-spacing": "off",
        "unicorn/no-abusive-eslint-disable": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "unicorn/no-array-callback-reference": "off",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "unicorn/unicorn/consistent-function-scoping": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-dupe-keys": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "eol-last": ["error", "always"],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "arrow-parens": ["error", "as-needed"],
        "unicorn/prevent-abbreviations": [
            "error",
            {
                "replacements": {
                    "ref": false,
                    "var": false,
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
        "node/no-missing-import": [
            "off",
            {
                "tryExtensions": [".js", ".ts", ".jsx", ".tsx", ".d.ts"],
            },
        ],
        "import/extensions": [
            "error",
            {
                "css": "always",
                "json": "always",
            },
        ],
        "no-void": [
            "error",
            {
                "allowAsStatement": true,
            },
        ],
        "padded-blocks": [
            "error",
            {
                "classes": "always",
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
        "import/order": [
            "error",
            {
                "groups": [
                    ["builtin", "external", "internal", "type"],
                    ["parent", "sibling", "index"],
                ],
                "newlines-between": "always-and-inside-groups",
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
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true,
                "optionalDependencies": false,
            },
        ],
    },
};
module.exports = configuration;
