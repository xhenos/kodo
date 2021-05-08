<template>
	<span class="badge">
		<material-icon v-if="icon" :icon="icon" />
		{{ text }}
	</span>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "",
		},
		text: {
			type: String,
		},
	},
};
</script>

<style lang="stylus">
.badge {
	background-color var(--primary)
	border-radius 99em
	color var(--background)
	display inline-flex
	font-size 0.75em
	font-weight 500
	margin 0 5px
	padding 2px 8px
	transform translateY(-0.5em)
	width max-content
	vertical-align middle
	margin-bottom -8px

	.material-holder {
		margin-right 0.2rem
	}
}
</style>
