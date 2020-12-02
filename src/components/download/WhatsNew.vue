<template>
	<div class="bg-ui-container rounded-lg p-8">
		<h2>Whats New</h2>
		<div v-html="marked" />
	</div>
</template>

<script>
import marked from "marked";

export default {
	props: {
		body: String,
	},
	computed: {
		marked() {
			return marked(this.$props.body).replace(
				/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g,
				"<a href='https://github.com/$2' target='_blank' rel='noopener'>@$2</a>"
			);
		},
	},
};
</script>

<style>

</style>