module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:jsdoc/recommended",
	],
	overrides: [
		{
			files: ["*.js"],
			rules: {
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-return": "off",
			},
		},
		{
			files: ["*.test.js"],
			env: {
				jest: true,
			},
		},
	],
	globals: {},
	parserOptions: {
		ecmaVersion: "5",
		project: ["tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "jsdoc"],
	parser: "@typescript-eslint/parser",
}
