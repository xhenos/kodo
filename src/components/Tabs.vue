<template>
	<div>
		<div class="tabs">
			<ul>
				<li v-for="tab in tabs" :key="tab.name" :class="{ isActive: tab.isActive }">
					<a :href="tab.href" @click="selectTab(tab)">
						{{ tab.name }}
					</a>
				</li>
			</ul>
		</div>
		<div class="tabs-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabs: [],
		};
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = tab.name === selectedTab.name;
			});
		},
	},
};
</script>

<style lang="stylus">
.tabs {
	ul {
		display flex
		padding 0 !important

		li {
			flex 1 1 0%
			list-style none
			padding 0 0.5rem 1rem
			margin-bottom 0 !important
			border-bottom 1px solid var(--color-ui-border)
			text-align center

			&.isActive {
				border-bottom 2px solid var(--color-ui-primary)
			}

			a {
				color var(--color-ui-typo) !important

				&:hover {
					color var(--color-ui-primary) !important
				}
			}
		}
	}
}
</style>
