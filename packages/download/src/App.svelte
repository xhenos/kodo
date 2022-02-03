<script>
	import Layout from "tachiyomi-common/src/components/Layout.svelte";
	import Icon from "tachiyomi-common/src/components/Icon.svelte";
	import System from 'svelte-system-info'

	export let name;
</script>

<Layout>
	<div class="main">
		<div class="branding">
			<Icon name="logo" height="80" width="80" />
			<h2>Download</h2>
		</div>
		<h1 class="description">
			Download the latest stable version of Tachiyomi the preview version.
		</h1>
		<div class="requirement">
			{(System.OSName == "Android" || System.OSName == "Windows") ? "Requires Android 6.0 or higher." : `You are using ${System.OSName == "(n/a)" ? "an unknown OS" : System.OSName}, unfortunately we only support Android`}
		</div>
		<div class="download {System.OSName == "Android" ? "" : "unsupported"}">
			<a href="https://github.com/tachiyomiorg/tachiyomi/releases/latest">
				<button id="stable">
					Stable
				</button>
			</a>
			<a href="https://github.com/tachiyomiorg/tachiyomi-preview/releases/latest">
				<button id="preview">
					Preview
				</button>
			</a>
		</div>
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

	.requirement {
		text-align: center;
		font-weight: 400;
		font-size: 1rem;
	}

	.requirement span {
		text-align: center;
		font-weight: 500;
		font-size: 1rem;
	}

	.download {
		text-align: center;
	}

	.download.unsupported {
		display: none;
	}
</style>