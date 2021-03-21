module.exports = {
	plugins: ["stylelint-plugin-stylus"],
	rules: {
		"stylus/pythonic": "never",
		"stylus/declaration-colon": "never",
		"stylus/semicolon": "never",
		"stylus/single-line-comment-double-slash-space-after": "always",
		"stylus/property-no-unknown": null,
		"stylus/selector-type-no-unknown": null,
		"stylus/selector-list-comma": "always",
		"stylus/indentation": [
			"tab",
			{
				indentInsideParens: "twice",
			},
		],
		"rule-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
			},
		],
	},
	extends: ["stylelint-plugin-stylus/standard"],
};
