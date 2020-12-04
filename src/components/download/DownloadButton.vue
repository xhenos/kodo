<template>
	<button
		class="rounded-md my-2 md:mx-2  px-20 py-2"
		v-bind:class="{ 'bg-blue-400': isAlternative, 'bg-blue-600': !isAlternative }"
	>
		<p class="font-bold text-white mb-0">{{ title }}</p>
		<p class="text-sm font-light text-white m-0">{{ data.version }}</p>
	</button>
</template>

<script>
export default {
	props: {
		title: String,
		isAlternative: Boolean,
		data: Object,
	},
};
</script>

<style></style>
