<template>
	<Layout>
		<div class="error">
			<h1 class="header">Oh no! There is nothing here.</h1>
			<g-link to="/" class="go-back">Go back</g-link>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "404 - Nothing here",
	},
};
</script>

<style lang="stylus">
.error {
	margin-top auto
	text-align center
	margin-top 2rem

	@media (min-width 768px) {
		margin-top 4rem
	}

	.header {
		font-weight 700
		font-size 2.25rem
		color var(--color-ui-primary)
	}

	.go-back {
		font-weight 700
		border-bottom-width 1px
		border-color var(--color-ui-primary)
		font-size 1.25rem
	}
}
</style>
