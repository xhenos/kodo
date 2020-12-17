<template>
	<div id="Sidebar" ref="sidebar" v-if="showSidebar" class="px-4 pt-8 lg:pt-12">
		<div
			v-for="(section, index) in sidebar.sections"
			:key="section.title"
			class="pb-4 mb-4 border-ui-border"
			:class="{ 'border-b': index < sidebar.sections.length - 1 }"
		>
			<g-link
				v-if="section.index.length > 0"
				:to="`${section.index}`"
				class="menu-item menu-link flex items-center py-1 font-semibold"
				:class="getClassesForAnchor({ page: section.index })"
				@mousedown="$emit('navigate')"
			>
				<span
					class="menu-item-dot absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"
				></span>
				<h3 class="menu-item pt-0 mt-0 mb-1 text-sm tracking-tight uppercase border-none">
					{{ section.title }}
				</h3>
			</g-link>
			<h3 v-else class="menu-item pt-0 mt-0 mb-1 text-sm tracking-tight uppercase border-none">
				{{ section.title }}
			</h3>

			<ul class="max-w-full pl-2 mb-0">
				<li
					v-for="page in findPages(section.items)"
					:id="page.path"
					:key="page.path"
					:class="getClassesForAnchor(page)"
					@mousedown="$emit('navigate')"
				>
					<g-link :to="`${page.path}`" class="menu-item menu-link flex items-center py-1 font-semibold">
						<span
							class="menu-item-dot absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"
							:class="{
								'opacity-100 scale-100': currentPage.path === page.path,
							}"
						></span>
						{{ page.title }}
					</g-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<static-query>
query Sidebar {
	metadata {
		settings {
			sidebar {
				name
				sections {
					title
					index
					items
				}
			}
		}
	}
}
</static-query>

<script>
export default {
	data() {
		return {
			expanded: [],
		};
	},
	computed: {
		pages() {
			return this.$page.allMarkdownPage.edges.map(edge => edge.node);
		},
		sidebar() {
			return this.$static.metadata.settings.sidebar.find(
				sidebar => sidebar.name === this.$page.markdownPage.sidebar
			);
		},
		showSidebar() {
			return this.$page.markdownPage.sidebar && this.sidebar;
		},
		currentPage() {
			return this.$page.markdownPage;
		},
	},
	methods: {
		getClassesForAnchor({ path }) {
			if (!path) return {};
			return {
				"text-ui-primary": this.currentPage.path === path,
				"transform hover:translate-x-1 hover:text-ui-primary": !this.currentPage.path === path,
			};
		},
		findPages(links) {
			return links.map(link => this.pages.find(page => page.path === link));
		},
	},
};
</script>

<style lang="stylus">
#Sidebar {
	h3 {
		color currentColor
		&.active--exact {
			color var(--color-ui-primary)
			span {
				background-color var(--color-ui-primary)
			}
		}
	}
	a {
		color currentColor
		&.active--exact {
			color var(--color-ui-primary)
			span {
				background-color var(--color-ui-primary)
			}
		}
		&:hover {
			color var(--color-ui-primary)
		}
	}
	li a {
		transition all 0.3s
		&.active {
			color var(--color-ui-primary)
			padding-left 0.8rem
		}
	}
}
</style>
