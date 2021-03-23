<template>
	<div>
		<div id="NextPrevLinks">
			<g-link v-if="prev" :to="prev.path" class="nextPrevButton next">
				<ArrowLeftIcon size="1x" />
				{{ prev.title }}
			</g-link>

			<g-link v-if="next" :to="next.path" class="nextPrevButton prev">
				{{ next.title }}
				<ArrowRightIcon size="1x" />
			</g-link>
		</div>
	</div>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from "vue-feather-icons";

export default {
	components: {
		ArrowLeftIcon,
		ArrowRightIcon,
	},

	computed: {
		page() {
			return this.$page.markdownPage;
		},
		pages() {
			return this.$page.allMarkdownPage.edges.map(edge => edge.node);
		},
		next() {
			if (this.pages && !this.page.next) {
				return false;
			}

			return this.pages.find(page => page.path === this.page.next);
		},
		prev() {
			if (this.pages && !this.page.prev) {
				return false;
			}

			return this.pages.find(page => page.path === this.page.prev);
		},
	},
};
</script>

<style lang="stylus">
// flex flex-col sm:flex-row justify-between items-center select-none

#NextPrevLinks {
	display flex
	flex-direction column
	align-items center
	justify-content space-between
	user-select none

	.nextPrevButton {
		align-items center
		border-color var(--color-ui-border)
		border-radius 0.5rem
		border-width 1px
		color var(--color-ui-primary)
		display flex
		font-weight 700
		margin-bottom 1rem
		padding-top 0.5rem
		padding-bottom 0.5rem
		padding-left 1rem
		padding-right 1rem
		transition-property background-color, border-color, color, fill, stroke
		width 100%

		&:hover {
			background-color var(--color-ui-primary)
			color #fff
		}

		&.next {
			margin-right auto

			svg {
				margin-right 0.5rem
			}
		}

		&.prev {
			margin-left auto

			svg {
				margin-left 0.5rem
			}
		}

		@media (min-width 640px) {
			width max-content
		}
	}

	

	@media (min-width 640px) {
		justify-content space-evenly
		flex-direction row
	}
}
</style>
