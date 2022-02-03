<script>
	import Layout from "tachiyomi-common/src/components/Layout.svelte";
	import Icon from "tachiyomi-common/src/components/Icon.svelte";

	export let name;
</script>

<Layout>
	<div class="main">
		<div class="branding">
			<Icon name="logo" height="80" width="80" />
			<h2>Tachiyomi</h2>
		</div>
		<h1 class="description">
			Tachiyomi is an open-source Android app that lets you read any manga from your smartphone – faster and easier than ever.
		</h1>
	</div>
</Layout>

<style>
	.main {
		align-items: center;
		justify-content: center;
		margin: 8rem auto 2rem;
		padding-right: 1rem;
		padding-left: 1rem;
	}

	.branding {
		text-align: center;
		align-items: center;
		margin-bottom: .5rem;
	}

	.branding h2 {
		margin-top: 1.25rem;
		border-style: none;
		letter-spacing: -.05em;
		font-weight: 500;
		font-size: 3rem;
	}

	.description {
		text-align: center;
		font-weight: 400;
		font-size: 1.5rem;
	}
</style>