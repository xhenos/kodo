<template>
	<div id="EditThisPage">
		<a :href="editLink" target="_blank" class="hover:text-ui-primary">
			<Edit3Icon />
			<span>Edit this page</span>
		</a>
	</div>
</template>

<script>
import { Edit3Icon } from "vue-feather-icons";

export default {
	components: {
		Edit3Icon,
	},

	computed: {
		currentPath() {
			return this.$route.matched[0].path;
		},
		editLink() {
			return `/cms/#/edit/${this.$page.markdownPage.cms.collection}/${this.$page.markdownPage.cms.entry}`;
		},
	},
};
</script>

<style lang="stylus">
#EditThisPage {
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
