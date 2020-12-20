const colors = require("tailwindcss/colors");

module.exports = {
	theme: {
		extend: {
			colors: {
				ui: {
					background: "var(--color-ui-background)",
					sidebar: "var(--color-ui-sidebar)",
					typo: "var(--color-ui-typo)",
					primary: "var(--color-ui-primary)",
					primaryDark: "var(--color-ui-primary-dark)",
					border: "var(--color-ui-border)",
					container: "var(--color-ui-container)",
				},
				light: {
					background: colors.white,
					typo: colors.coolGray[700],
					sidebar: colors.coolGray[200],
					border: colors.coolGray[300],
					primary: colors.indigo[600],
					primary_dark: colors.indigo[700],
					secondary: colors.pink[700],
					container: "rgba(237, 242 ,247, 0.25)",
					search: colors.coolGray[200],
					select: "rgba(212, 53, 159, 0.2)",
					tip: {
						background: "#3b82f61a",
						border: "#3b82f633",
						text: "#3c83f6",
					},
					warning: {
						background: "#fbbf241a",
						border: "#fbbf2466",
						text: "#a08603e6",
					},
					danger: {
						background: "#ef44441a",
						border: "#ef444433",
						text: "#ef4444e6",
					},
					inline_code: {
						background: "rgba(212, 53, 159, 0.03)",
						text: "#b32585",
					},
				},
				dark: {
					background: colors.coolGray[900],
					typo: colors.coolGray[100],
					sidebar: colors.coolGray[800],
					border: colors.coolGray[800],
					primary: colors.indigo[500],
					primary_dark: colors.indigo[600],
					secondary: colors.pink[600],
					container: colors.coolGray[800],
					search: colors.coolGray[800],
					select: "rgba(212, 53, 159, 0.2)",
					tip: {
						background: "#3b82f61a",
						border: "#3b82f633",
						text: "#3b82f6e6",
					},
					warning: {
						background: "#fbbf241a",
						border: "#fbbf2433",
						text: "#fbbf24cc",
					},
					danger: {
						background: "#ef44441a",
						border: "#ef444433",
						text: "#ef4444e6",
					},
					inline_code: {
						background: "rgba(212, 53, 159, 0.03)",
						text: "#b32585",
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
		},
		container: {
			center: true,
			padding: "1rem",
		},
	},
	variants: {},
	plugins: [],
};
