<template>
	<span
		class="badge px-4 h-6 rounded-full text-xs font-semibold flex items-center"
		:class="`bg-${color}-700 text-${color}-100`"
	>
		<material-icon v-if="icon" :icon="icon" color="color" class="mr-1" />
		{{ text }}
	</span>
</template>
<script>
export default {
	props: {
		color: {
			type: String,
			default: "indigo",
		},
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
	display inline-flex
	width max-content

	.material-holder {
		margin-right 0.2rem
	}
}
</style>
