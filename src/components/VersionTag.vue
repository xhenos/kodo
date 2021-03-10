<template>
	<span v-if="stable" class="version" title="Version">{{ this.$data.stableTagName }}</span>
	<span v-else-if="stableFileName" class="fileNameContainer" title="File name">
		<MaterialIcon class="fileNameIcon select-none" icon="get_app" />
		<span class="fileName">tachiyomi-{{ this.$data.stableTagName }}.apk</span>
		<slot />
	</span>
	<span v-else-if="preview" class="version" title="Version">{{ this.$data.previewTagName }}</span>
	<span v-else-if="previewFileName" class="fileNameContainer" title="File name">
		<MaterialIcon class="fileNameIcon select-none" icon="get_app" />
		<span class="fileName">tachiyomi-{{ this.$data.previewTagName }}.apk</span>
		<slot />
	</span>
	<span v-else class="missingProps" title="Check the VersionTag.vue file for code example.">
		You need to specify props.
	</span>
</template>

<script>
/**
 * Code example: <VersionTag preview />
 */
export default {
	props: {
		stable: {
			type: Boolean,
			default: false,
		},
		stableFileName: {
			type: Boolean,
			default: false,
		},
		preview: {
			type: Boolean,
			default: false,
		},
		previewFileName: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			stableTagName: "0.00.0",
			previewTagName: "r0000",
		};
	},
	async mounted() {
		let stable = await this.$fetchers.tachiyomi().stable(this.$store);
		this.stableTagName = stable.data.version;

		let preview = await this.$fetchers.tachiyomi().preview(this.$store);
		this.previewTagName = preview.data.version;
	},
};
</script>

<style lang="stylus" scoped>
.fileNameContainer {
	white-space nowrap

	.fileNameIcon {
		color var(--color-ui-secondary)
		font-weight 500
		font-size 1em
		vertical-align top
	}

	.fileName {
		color var(--color-ui-secondary)
		font-weight 500
		font-size 1em
	}

	&:hover {
		cursor default
	}
}

.version {
	color var(--color-ui-secondary)
	font-weight 500
	font-size 1em
}
</style>
