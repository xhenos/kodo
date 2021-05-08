<template>
	<div class="whats-new">
		<header class="title">
			<InfoIcon />
			<h2>Whats New</h2>
		</header>
		<main class="changelog">
			<div v-html="marked" />
		</main>
		<footer class="note">
			<p>
				View the
				<a href="https://github.com/tachiyomiorg/tachiyomi/releases/latest" target="_blank" rel="noopener">
					detailed log
				</a>
				on GitHub.
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
.whats-new {
	background var(--container)
	border-radius 0.5rem
	padding 2rem

	.title {
		background-color transparent !important
		border none
		display flex
		justify-content center
		padding-bottom 1.5rem

		h2 {
			font-size 1.25rem
		}

		svg {
			margin-top 0.2rem
			margin-right 0.5rem
		}
	}

	.changelog {
		background-color transparent !important
	}

	h2 {
		display contents
	}

	li {
		list-style-type disc
		list-style-position inside
	}

	hr {
		border-color var(--text)
		opacity 0.2
	}
}
</style>
