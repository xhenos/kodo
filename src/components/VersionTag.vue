<template>
	<span class="fileNameContainer" title="File name">
		<MaterialIcon class="fileNameIcon" icon="get_app" />
		<span class="fileName">tachiyomi-v{{ this.$data.tagName }}.apk</span>
		<slot />
	</span>
</template>

<script>
export default {
	data() {
		return {
			tagName: "0.00.0",
		};
	},
	async mounted() {
        let stable = await this.$fetchers.tachiyomi().stable(this.$store)
        this.tagName = stable.data.version
	},
};
</script>

<style lang="scss" scoped>
.fileNameContainer {
	white-space: nowrap;
	.fileNameIcon {
		color: var(--inline-code-text);
		font-weight: 500;
		font-size: 1em;
		vertical-align: top;
	}
	.fileName {
		color: var(--inline-code-text);
		font-weight: 500;
		font-size: 1em;
	}
	&:hover {
		cursor: default;
	}
}
</style>