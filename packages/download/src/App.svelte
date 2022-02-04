<script>
	import Layout from "tachiyomi-common/src/components/Layout.svelte";
	import Icon from "tachiyomi-common/src/components/Icon.svelte";
	import API from "./scripts/api" 
	import System from 'svelte-system-info'
	import { onMount } from "svelte";

	const api = new API()

	let stable = undefined
	let preview = undefined

	$: stableUrls = extractDownloadUrls(stable, false)
	$: previewUrls = extractDownloadUrls(preview, true)

	function extractDownloadUrls(object, preview) {
		if (object === undefined) return {
			universal: "",
			other: []
		}
		const { data: { assets } } = object
		const index = assets.findIndex((element) => {
			const regex = preview ? /^tachiyomi-r\d{4,}.apk/ : /^tachiyomi-v\d+\.\d+\.\d+.apk/
			return regex.test(element.name)
		})
		return {
			universal: assets.splice(index, 1)[0].browser_download_url,
			other: assets.map((element) => element.browser_download_url).sort()
		}
	}

	onMount(async () => {
		const [stableResult, previewResult] = await api.fetchLatest()
		stable = stableResult
		preview = previewResult
	})

	console.log('BrowserName',    System.BrowserName)
	console.log('BrowserVersion', System.BrowserVersion)
	console.log('OSName',         System.OSName)
	console.log('OSVersion',      System.OSVersion)
</script>

<Layout>
	<div class="main">
		<div class="branding">
			<Icon name="logo" height="80" width="80" />
			<h2>Download</h2>
		</div>
		<div class="description">
			Download the latest stable version of Tachiyomi the preview version.
		</div>
		<div class="requirement">
			{(System.OSName == "iOS" || System.OSName == "MacOS") ? "Unfortunately we only support Android, anyone claiming otherwise should not be trusted." : ""}
		</div>
		<div class="download {(System.OSName == "Android" || System.OSName == "Windows" || System.OSName == "Linux" || System.OSName == '(n/a)') ? "" : "unsupported"}">
			<a href={stableUrls.universal}>
				<button id="stable">
					Stable
				</button>
			</a>
			<a href={previewUrls.universal}>
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
		margin-block-end: 0.5rem;
		border-style: none;
		letter-spacing: -.05em;
		font-weight: 500;
		font-size: 2.4rem;
	}

	.description {
		text-align: center;
		font-weight: 400;
		font-size: 1.2rem;
		margin-bottom: 0.75rem;
	}

	.requirement {
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