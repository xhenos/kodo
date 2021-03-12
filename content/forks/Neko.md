---
title: Neko
description: MangaDex specific fork of Tachiyomi and TachiyomiJ2K. This contains features specific to MangaDex that those versions cannot offer.
cms:
  collection: forks
  entry: Neko
  edit: true
icon: /assets/forks_logo-neko.png
forkName: neko
metaImage: /ogimage_large-neko.png
metaImageType: summary_large_image
metaColor: "#38CA79"
onThisPage: false
path: /forks/Neko/
---

import DownloadButtons from '~/components/DownloadButtons.vue'
import DownloadButton from '~/components/DownloadButton.vue'

<DownloadButtons>
  <DownloadButton fork="neko" title="Download" />
  <DownloadButton fork="neko" title="GitHub" isGithub />
  <template slot="footer">
		<p>
			Requires
			<b>Android 7.0</b>
			or higher.
		</p>
	</template>
</DownloadButtons>

## About
This is a [MangaDex](https://mangadex.org/) specific fork of **Tachiyomi** and [TachiyomiJ2K](/forks/TachiyomiJ2K/). This contains features specific to **MangaDex** that those versions cannot offer. It also features almost every feature that **J2K** has except for extensions (aka other sources), custom covers, and local manga.

## Screenshots
<g-image class="zoomable" src="/assets/ogimage_large-neko.png" immediate />

## Mangadex specific features:
-   Supports native login to **MangaDex** and supports 2FA
-   MDList support
-   Similar Manga recommendations
-   Manually sync of Manga to and from **MangaDex** follows list
-   MDList tracked manga can be auto marked read in app after reading on the website
-   Ability to filter chapters and skip by scanlator group

## Credits
-   [Inorichi](https://github.com/inorichi/) for making the original **Tachiyomi**
-   [Jays2Kings](https://github.com/Jays2Kings/) for the wonderful new UI of **J2K**

## Disclaimer
The developer of this application does not have any affiliation with the content providers available.
