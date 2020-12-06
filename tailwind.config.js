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
