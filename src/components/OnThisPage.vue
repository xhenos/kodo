<template>
	<div id="OnThisPage" class="on-this-page">
		<h3>On this page</h3>
		<div>
			<ul>
				<li
					v-for="(heading, index) in headings"
					:key="`${page.path}${heading.anchor}`"
					:class="{
						'separator': index > 0 && heading.depth === 2,
						'thighs': heading.depth === 2,
						[`depth-${heading.depth}`]: true,
					}"
				>
					<g-link
						:to="`${page.path}${heading.anchor}`"
						class="anchor relative flex items-center py-1 text-sm transition transform"
						:class="{
							'pl-2': heading.depth === 3,
							'pl-3': heading.depth === 4,
							'pl-4': heading.depth === 5,
							'pl-5': heading.depth === 6,
							'active-anchor': activeAnchor === heading.anchor,
						}"
					>
						<span
							class="absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"
							:class="{
								'opacity-100 scale-100': activeAnchor === heading.anchor,
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
		observerCallback(entries, observer) {
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
				rootMargin: "0px 0px 99999px",
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

		.anchor {
			transition all 0.3s
			padding-left 0.8rem

			&.active-anchor {
				color var(--color-ui-primary)

				span {
					background-color var(--color-ui-primary)
				}
			}
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
