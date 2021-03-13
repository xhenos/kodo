<template>
	<span class="badge">
		<material-icon v-if="icon" :icon="icon" class="mr-1" />
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
	background-color var(--color-ui-primary)
	border-radius 99em
	display inline-flex
	font-size 0.45em
	margin 0 5px
	padding 4px 16px
	transform translateY(-0.5em)
	width max-content

	.material-holder {
		margin-right 0.2rem
	}
}
</style>
