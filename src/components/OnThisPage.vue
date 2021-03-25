<template>
	<div class="on-this-page">
		<h3>On this page</h3>
		<div>
			<ul>
				<li
					v-for="(heading, index) in headings"
					:key="`${page.path}${heading.anchor}`"
					:class="{
						separator: index > 0 && heading.depth === 2,
						thighs: heading.depth === 2,
						[`depth-${heading.depth}`]: true,
					}"
				>
					<g-link
						:to="`${page.path}${heading.anchor}`"
						class="anchor"
						:class="{
							'active-anchor': activeAnchor === heading.anchor,
						}"
					>
						<span
							:class="{
								visible: activeAnchor === heading.anchor,
							}"
						></span>
						{{ heading.value }}
					</g-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeAnchor: "",
			observer: null,
		};
	},

	computed: {
		page() {
			return this.$page.markdownPage;
		},
		headings() {
			return this.page.headings.filter(h => h.depth > 1);
		},
	},

	watch: {
		$route: function() {
			if (process.isClient) {
				if (window.location.hash) this.activeAnchor = window.location.hash;

				// Clear the current observer.
				this.observer.disconnect();

				// And create another one for the next page.
				this.$nextTick(this.initObserver);
			}
		},
	},

	methods: {
		observerCallback(entries) {
			// This early return fixes the jumping
			// of the bubble active state when we click on a link.
			// There should be only one intersecting element anyways.
			if (entries.length > 1) {
				return;
			}

			const id = entries[0].target.id;

			// We want to give the link of the intersecting
			// headline active and add the hash to the url.
			if (id) {
				this.activeAnchor = "#" + id;

				if (history.replaceState) {
					history.replaceState(null, null, "#" + id);
				}
			}
		},

		initObserver() {
			this.observer = new IntersectionObserver(this.observerCallback, {
				// This rootMargin should allow intersections at the top of the page.
				rootMargin: "0px 0px 9999px",
				threshold: 1,
			});

			const elements = document.querySelectorAll(
				".content h2, .content h3, .content h4, .content h5, .content h6"
			);

			for (let i = 0; i < elements.length; i++) {
				this.observer.observe(elements[i]);
			}
		},
	},

	mounted() {
		if (process.isClient) {
			if (window.location.hash) {
				this.activeAnchor = window.location.hash;
			}
			this.$nextTick(this.initObserver);
		}
	},
};
</script>

<style lang="stylus">
.on-this-page {
	margin-top 2rem
	border-color var(--color-ui-border)

	h3 {
		letter-spacing 0.025em
		text-transform uppercase
		padding-top 0
		margin-top 0
		font-size 0.875rem
		border-style none
	}

	.separator {
		padding-top 0.5rem
		margin-top 0.5rem
		border-top-width 1px
		border-style dashed
		border-color var(--color-ui-border)
	}

	// I'm not horny you are

	.thighs {
		font-weight 600
	}

	.anchor {
		margin-top unset
		position relative
		display flex
		align-items center
		padding-top 0.25rem
		padding-bottom 0.25rem
		font-size 0.875rem
		transition-property background-color, border-color, color, fill, stroke, opacity, box-shadow, transform

		&:hover {
			color var(--color-ui-primary)
		}

		&.active-anchor {
			color var(--color-ui-primary)
		}

		span {
			position absolute
			width 0.5rem
			height 0.5rem
			margin-left -0.75rem
			border-radius 100%
			opacity 0
			background-color var(--color-ui-primary)
			transition-property background-color, border-color, color, fill, stroke, opacity, box-shadow, transform
			transform-origin center
			--transform-scale-x 0
			--transform-scale-y 0

			&.visible {
				opacity 1
				--transform-scale-x 1
				--transform-scale-y 1
			}
		}
	}

	for depth in 3 4 5 6 {
		.depth-{depth} .anchor {
			padding-left 0.25rem * depth - 0.25rem
		}
	}

	@media (min-width 640px) {
		padding-bottom 4rem
		padding-left 1rem
	}

	@media (min-width 768px) {
		padding-top 3rem
		padding-left 1.5rem
		margin-top 0
		border-left-width 1px
	}

	@media (min-width 1024px) {
		padding-left 2rem
	}
}
</style>
