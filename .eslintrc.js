module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/essential", "plugin:prettier/recommended", "@vue/prettier", "plugin:gridsome/recommended"],
	rules: {
		"linebreak-style": ["warn", "unix"],
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"gridsome/format-query-block": [
			"warn",
			{
				overridePrettierOption: {
					tabWidth: 4,
					useTabs: true,
					vueIndentScriptAndStyle: true,
				},
			},
		],
	},
	parserOptions: {
		parser: "babel-eslint",
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
			env: {
				jest: true,
			},
		},
	],
};
