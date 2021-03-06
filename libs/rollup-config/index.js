const svelte = require("rollup-plugin-svelte");
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve").nodeResolve;
const livereload = require("rollup-plugin-livereload");
const { terser } = require("rollup-plugin-terser");
const css = require("rollup-plugin-css-only");
const replace = require("@rollup/plugin-replace");

const production = !process.env.ROLLUP_WATCH;

const env = {
	LANDING_PAGE: JSON.stringify(
		!production ? "http://localhost:8080" : process.env.LANDING
	),
	DOWNLOAD_PAGE: JSON.stringify(
		!production ? "http://localhost:8081" : process.env.DOWNLOAD
	),
	EXTENSION_PAGE: JSON.stringify(
		!production ? "http://localhost:8082" : process.env.EXTENSION
	),
	DOCS_PAGE: JSON.stringify("https://docs.kodo.moe"),
	TWITTER_LINK: JSON.stringify("https://twitter.com/tachiyomiorg"),
	FACEBOOK_LINK: JSON.stringify("https://www.facebook.com/tachiyomiorg"),
	REDDIT_LINK: JSON.stringify("https://www.reddit.com/r/Tachiyomi/"),
	GITHUB_LINK: JSON.stringify("https://github.com/tachiyomiorg/"),
	DISCORD_LINK: JSON.stringify("https://discord.gg/tachiyomi"),
};

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require("child_process").spawn(
				"npm",
				["run", "start", "--", "--dev"],
				{
					stdio: ["ignore", "inherit", "inherit"],
					shell: true,
				}
			);

			process.on("SIGTERM", toExit);
			process.on("exit", toExit);
		},
	};
}

module.exports = {
	input: "src/main.js",
	output: {
		sourcemap: true,
		format: "iife",
		name: "app",
		file: "public/build/bundle.js",
	},
	plugins: [
		svelte({
			compilerOptions: {
				dev: !production,
			},
		}),
		css({ output: "bundle.css" }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ["svelte"],
		}),
		commonjs(),

		replace(
			Object.assign(env, {
				preventAssignment: true,
				isProduction: production,
			})
		),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload("public"),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),
	],
	watch: {
		clearScreen: false,
	},
};
