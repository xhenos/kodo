<template>
	<div id="WhatsNew" class="bg-ui-container rounded-lg p-8">
		<header class="bg-transparent flex justify-center">
			<InfoIcon class="mr-2" />
			<h2>Whats New</h2>
		</header>
		<main>
			<div v-html="marked" />
		</main>
		<footer class="note">
			<p>
				View the full release
				<a href="https://github.com/tachiyomiorg/tachiyomi/releases/latest" target="_blank" rel="noopener">
					here
				</a>
				.
			</p>
		</footer>
	</div>
</template>

<script>
import marked from "marked";
import { InfoIcon } from "vue-feather-icons";

export default {
	components: { InfoIcon },
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

<style lang="stylus">
#WhatsNew {
	h2 {
		display contents
	}
	svg {
		margin-top 4px
	}
	li {
		list-style-type disc
		list-style-position inside
	}
}
</style>
