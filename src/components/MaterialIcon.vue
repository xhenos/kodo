<template>
	<i v-if="iconOnly" :class="name" class="material-icons">{{ icon }}</i>
	<span v-else :class="name" class="material-holder">
		<i class="material-icons select-none">{{ icon }}</i>
	</span>
</template>

<script>
/**
 * For material icon references use https://material.io/resources/icons/
 * Code example: <MaterialIcon icon="android" />
 */
export default {
	props: {
		iconOnly: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			default: "",
		},
		icon: {
			type: String,
			default: "",
		},
	},
};
</script>

<style lang="stylus">
.material-icons {
	font-family "Material Icons"
	font-weight normal
	font-style normal
	font-size 1.35em
	display inline-block
	line-height 1
	text-transform none
	letter-spacing normal
	word-wrap normal
	white-space nowrap
	direction ltr
	position relative
	top 0.2rem

	// Support for all WebKit browsers.
	-webkit-font-smoothing antialiased
	// Support for Safari and Chrome.
	text-rendering optimizeLegibility

	// Support for Firefox.
	-moz-osx-font-smoothing grayscale

	// Support for IE.
	font-feature-settings "liga"
}


.material-holder {
	margin 0
	font-size 0.85em
	border-radius 3px
}
</style>
