module.exports = {
	plugins: ["stylelint-plugin-stylus"],
	rules: {
		"stylus/indentation": "tab",
		"stylus/pythonic": "never",
		"stylus/declaration-colon": "never",
		"stylus/semicolon": "never",
		"stylus/single-line-comment-double-slash-space-after": "always",
		"stylus/property-no-unknown": null,
		"stylus/selector-type-no-unknown": null,
	},
	extends: ["stylelint-plugin-stylus/standard"],
};
