---
title: TachiyomiJ2K
description: This fork takes a new approach to the design of the base app along with several other enhancements.
icon: /img/forks_logo-j2k.png
forkName: tachiyomi-j2k
metaImage: /ogimage_large-j2k.png
metaImageType: summary_large_image
metaColor: "#2E84BF"
onThisPage: false
path: /forks/TachiyomiJ2K/
---

import DownloadButtons from '~/components/DownloadButtons.vue'
import DownloadButton from '~/components/DownloadButton.vue'

<DownloadButtons>
  <DownloadButton fork="j2k" title="Download" />
  <DownloadButton fork="j2k" title="GitHub" isGithub />
  <template slot="footer">
		<p>
			Requires
			<b>Android 6.0</b>
			or higher.
		</p>
	</template>
</DownloadButtons>

## Introduction
**TachiyomiJ2K** is maintained by **[Jays2Kings](https://github.com/Jays2Kings)**.

This fork takes a new approach to the design of the base app along with several other enhancements.

<g-image class="zoomable" src="/img/ogimage_large-j2k.png" immediate />

## Features
:::videolink
For a full list of features, visit the GitHub page.
:::

- **New Manga details screen**
- **New Recents page**
  - Providing quick access to newly added manga, new chapters, and to continue where you left on in a series
- **Android 10 Edge to Edge support**
  - No more small ugly bar for the gesture navigation.
  - Older versions get a translucent nav bar instead.
- **Automatic background based on manga page**
  - For those that like having a white background to match the content, this will automatically set the background to match for moments such as a flashback section of a manga.
- **Reader seekbar overrides switch app gesture in Android 10, so no more accidents for that**
- **[New material snackbar](https://raw.githubusercontent.com/Jays2Kings/tachiyomi/master/.github/readme-images/material%20snackbar.png)**
  - Removing manga now auto deletes chapters and has an undo button in case you change your mind.
- **Library specific enhancements**
  - Library Categories are stacked vertically
  - Per-category/Drag & drop sorting
  - Tri-state/Negative filters
  - Multi-source migration
  - Sort by Date Added (*Taken from [Neko](/forks/Neko/).*)
- **[Share sheets upgrade for Android 10](https://raw.githubusercontent.com/Jays2Kings/tachiyomi/master/.github/readme-images/share%20menu.png)**
- **Batch Auto-Source Migration**
  - *Taken from [TachiyomiEH](/forks/TachiyomiEH/).*
- **Recently Read goes all the way back to the beginning of time**
- **Restoring backups in the background**
  - *Taken from [Neko](/forks/Neko/).*
- **Expanding manga thumbnails**
- **A lot more Material Design 2 additions**
