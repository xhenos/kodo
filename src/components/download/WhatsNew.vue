<template>
	<div id="WhatsNew" class="bg-ui-container rounded-lg p-8">
		<header class="bg-transparent flex justify-center">
			<SunriseIcon class="mr-2" />
			<h2>Whats New</h2>
		</header>
		<main>
			<div v-html="marked" />
		</main>
		<footer>
			<p>
				View the full release
				<a href="https://github.com/inorichi/tachiyomi/releases/latest" target="_blank" rel="noopener">here</a>
				.
			</p>
		</footer>
	</div>
</template>

<script>
import marked from "marked";
import { SunriseIcon } from "vue-feather-icons";

export default {
	components: { SunriseIcon },
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
#WhatsNew li {
	list-style-type: disc;
	list-style-position: inside;
}
</style>
