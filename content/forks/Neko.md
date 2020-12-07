---
title: Neko
metaTitle: Neko
description: MangaDex specific fork of Tachiyomi and TachiyomiJ2K. This contains features specific to MangaDex that those versions cannot offer.
sidebar: default
path: /forks/Neko/
meta:
  - property: og:image
    content: /assets/forks_logo-neko.png
  - name: theme-color
    content: "#38CA79"
  - name: msapplication-TileColor
    content: "#38CA79"
---

# <g-image class="headerLogo" src="~/images/forks_logo-neko.png" width="64" height="64" fit="contain"/> Neko

import DownloadButtons from '~/components/download/DownloadButtons.vue'
import ForkButton from '~/components/download/ForkButton.vue'

<DownloadButtons>
  <ForkButton fork="neko" />
  <ForkButton fork="neko" isGithub />
</DownloadButtons>

## About
This is a [MangaDex](https://mangadex.org/) specific fork of **Tachiyomi** and [TachiyomiJ2K](/forks/TachiyomiJ2K/). This contains features specific to **MangaDex** that those versions cannot offer. It also features almost every feature that **J2K** has except for extensions (aka other sources), custom covers, and local manga.

## Screenshots
<g-image class="zoomable" src="~/images/forks_banner-neko.png" />

## Mangadex specific features:
- Supports native login to **MangaDex** and supports 2FA
- MDList support
- Similar Manga recommendations
- Manually sync of Manga to and from **MangaDex** follows list
- MDList tracked manga can be auto marked read in app after reading on the website
- Ability to filter chapters and skip by scanlator group

## Credits
- [Inorichi](https://github.com/inorichi/) for making the original **Tachiyomi**
- [Jays2Kings](https://github.com/Jays2Kings/) for the wonderful new UI of **J2K**

## Disclaimer
The developer of this application does not have any affiliation with the content providers available.
