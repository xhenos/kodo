<template>
	<div id="EditOnGithub">
		<a :href="editLink" target="_blank" class="hover:text-ui-primary">
			<GithubLogo />
			<span>Edit this page on GitHub</span>
		</a>
	</div>
</template>

<script>
import GithubLogo from "@/assets/images/github-logo.svg";

export default {
	components: {
		GithubLogo,
	},

	computed: {
		currentPath() {
			return this.$route.matched[0].path;
		},
		editLink() {
			let path = this.currentPath;
			if ((path.match(new RegExp("/", "g")) || []).length == 1) path = path + "/index";
			return `https://github.com/xhenos/tachiyomi-website/blob/gridsome/content${path}.md`;
		},
	},
};
</script>

<style lang="stylus">
#EditOnGithub {

	a {
		font-size 0.9rem
		font-weight normal
		display inline-flex
		align-items center

		svg {
			margin-right 0.5rem
		}
	}
}
</style>
