<template>
	<div class="edit-page">
		<a class="edit-link" :href="editLink" target="_blank">
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
.edit-page {
	.edit-link {
		font-size 0.9rem
		font-weight normal
		display inline-flex
		align-items center
		color var(--color-ui-typo)

		&:hover {
			color var(--color-ui-primary)
		}

		svg {
			margin-right 0.5rem
		}
	}
}
</style>
