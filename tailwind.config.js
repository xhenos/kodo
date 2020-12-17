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
					container: "rgba(237, 242 ,247, 0.25)",
					search: colors.coolGray[200],
					select: "rgba(212, 53, 159, 0.2)",
					tip: {
						background: "rgba(24, 76, 239, 0.02)",
						border: "rgba(24, 76, 239, 0.2)",
						text: "rgba(7, 29, 98, 1)",
					},
					warning: {
						background: "rgba(178, 148, 0, 0.02)",
						border: "rgba(178, 148, 0, 0.2)",
						text: "rgba(64, 52, 26, 1)",
					},
					danger: {
						background: "rgba(229, 66, 43, 0.02)",
						border: "rgba(229, 66, 43, 0.2)",
						text: "rgba(61, 14, 7, 1)",
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
					container: colors.coolGray[800],
					search: colors.coolGray[800],
					select: "rgba(212, 53, 159, 0.2)",
					tip: {
						background: colors.coolGray[800],
						border: "rgba(45, 96, 255, 0.2)",
						text: "rgba(65, 111, 255, 1)",
					},
					warning: {
						background: colors.coolGray[800],
						border: "rgba(199, 168, 10, 0.2)",
						text: "rgba(199, 168, 10, 1)",
					},
					danger: {
						background: colors.coolGray[800],
						border: "rgba(222, 65, 43, 0.2)",
						text: "rgba(222, 65, 43, 1)",
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
