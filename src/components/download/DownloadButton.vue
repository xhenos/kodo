<template>
	<button class="rounded-md my-2 md:mx-2 px-20 py-2" v-bind:class="`bg-${color}-${variant}`">
		<p class="font-bold text-white mb-0">{{ title }}</p>
		<p v-if="data" class="text-sm font-light text-white m-0">{{ data.version }}</p>
	</button>
</template>

<script>
export default {
	props: {
		title: String,
		color: {
			type: String,
			default: "blue"
		},
		variant: {
			type: String,
			default: "800"
		},
		data: Object,
	},
};
</script>

<style></style>
