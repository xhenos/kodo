const colors = { ...require("tailwindcss/defaultTheme").colors, ...require("@tailwindcss/postcss7-compat/colors") };

module.exports = {
	future: {
		purgeLayersByDefault: true,
	},
	purge: {
		layers: ["utilities"],
		content: ["./src/**/*.vue", "./src/**/*.styl"],
		options: {
			whitelist: ["my-special-class", "other-class"],
			whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
			whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
		},
	},
	theme: {
		extend: {
			colors: {
				ui: {
					background: "var(--color-ui-background)",
					header: "var(--color-ui-header)",
					typo: "var(--color-ui-typo)",
					sidebar: "var(--color-ui-sidebar)",
					border: "var(--color-ui-border)",
					primary: "var(--color-ui-primary)",
					primary_dark: "var(--color-ui-primary-dark)",
					secondary: "var(--color-ui-secondary)",
					container: "var(--color-ui-container)",
					gray: "var(--color-ui-gray)",
				},
				light: {
					background: colors.white,
					header: colors.coolGray[700],
					typo: colors.coolGray[700],
					sidebar: colors.coolGray[200],
					border: colors.coolGray[200],
					primary: colors.indigo[600],
					primary_dark: colors.indigo[700],
					secondary: colors.pink[700],
					container: "#edf2f740",
					gray: colors.coolGray[300],
					select: "#d4359f33",
					tip: {
						background: "#3b82f61a",
						border: "#3b82f633",
						text: "#3c83f6",
						link: "#3c83f6",
					},
					warning: {
						background: "#fbbf241a",
						border: "#fbbf2466",
						text: "#a08603e6",
						link: "#a08603",
					},
					danger: {
						background: "#ef44441a",
						border: "#ef444433",
						text: "#ef4444e6",
						link: "#ef4444",
					},
					alert: {
						background: "#F4F4F5",
						border: "#F4F4F5",
						text: "#909399",
					},
					inline_code: {
						background: colors.coolGray[100],
						text: colors.pink[600],
					},
				},
				dark: {
					background: colors.coolGray[900],
					header: colors.coolGray[100],
					typo: colors.coolGray[300],
					sidebar: colors.coolGray[800],
					border: colors.coolGray[800],
					primary: colors.indigo[400],
					primary_dark: colors.indigo[600],
					secondary: colors.pink[500],
					container: colors.coolGray[800],
					select: "#d4359f33",
					gray: colors.coolGray[600],
					tip: {
						background: "#3b82f61a",
						border: "#3b82f633",
						text: "#3b82f6e6",
						link: "#3b82f6",
					},
					warning: {
						background: "#fbbf241a",
						border: "#fbbf2433",
						text: "#fbbf24cc",
						link: "#fbbf24",
					},
					danger: {
						background: "#ef44441a",
						border: "#ef444433",
						text: "#ef4444e6",
						link: "#ef4444",
					},
					alert: {
						background: colors.coolGray[800],
						border: colors.coolGray[800],
						text: "#ced7e3",
					},
					inline_code: {
						background: colors.coolGray[800],
						text: colors.pink[400],
					},
				},
			},
			spacing: {
				sm: "24rem",
			},
			screens: {
				xxl: "1400px",
			},
			fontFamily: {
				fancy: ["Jost", "Helvetica", "Helvetica Neue", "Segoe UI", "Arial", "sans-serif"],
			},
			backgroundImage: theme => ({
				"hero-pattern": "url('/hero-pattern.png')",
			}),
		},
		container: {
			center: true,
			padding: "1rem",
		},
	},
	corePlugins: {
		container: false,
		transform: false,
		visible: false,
	},
	variants: {},
	plugins: [],
};
