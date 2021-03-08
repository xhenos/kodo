---
title: Sources
description: Need help with something? Most of your issues can probably be solved from this page.
cms:
  collection: faq
  entry: sources
  edit: true
sidebar: default
prev: /help/faq/extensions/
---

## MangaDex

### Why are there no results when searching?
::: videolink
[<MaterialIcon icon="videocam"/> Click for video guide](/assets/faq_mangadex-no-results.mp4)
:::

If you're not getting any results when searching **MangaDex** then you need to log in. To do so enter the <Navigation item="webview"/> for **MangaDex** then press the **Manga** drop-down and choose either **Sign up** or **Log in** to proceed with the login.

::: guide
To enter the **WebView** go to <Navigation item="browse"/> → <Navigation item="button_latest"/> next to **MangaDex**, then press on <Navigation item="webview"/> in the top right corner.
:::

### Why is MangaDex slow?
If pages are loading slowly or not at all, try:
- Making sure you have the *latest* version of the extension.
- Checking if **MangaDex** is either down, or is having the same issues.
- Trying to **Clear database** under <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/>.
- Trying to **Clear chapter cache** under <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/>.
- Going to <Navigation item="browse"/> → <Navigation item="extensions"/> → **MangaDex** → **Image Server** and then selecting a *different* server location.

:::alert Disclaimer
Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality.
:::

### How do I ignore chapters from certain scanlator groups?
You can go to the manga's page in <Navigation item="webview"/> and block groups you do not want to see. Close <Navigation item="webview"/> and refresh the manga in the app. The group's chapters should be gone now.

### Is there an alternate searching method?
**MangaDex** allows you to search using the ID number to find manga. The easiest way to get the ID is by opening the manga in your browser and looking at the URL.

::: guide
An example search would be **`id:23427`** which would return results for [Candy & Cigarettes](https://mangadex.org/title/23427/candy-cigarettes)
:::

### How do I fix chapters from Mangaplus being broken?
Install the **MANGA Plus by SHUEISHA** extension instead and then migrate the manga that uses **MANGA Plus** on **MangaDex** onto the **MANGA Plus** source.

::: note
Read about source migration [here](/help/guides/source-migration/)
:::

## Former Mangabox extensions

### What happend to Mangabox?
As part of a general move to split up multi-source extensions, the Mangabox extension was removed, and all of its sources were made into their own extensions, namely **Mangakakalot**, **Manganelo**, **Mangabat** and **Mangairo**.

### What do `Page list is empty` and `Source URL has changed` mean?
The former **Mangabox** extensions have created new entries for many of the manga on their websites. The old entries are obsolete and will not work. To resolve this, [migrate](/help/guides/source-migration/) the manga from the source to itself to get the new entry, or better yet, to a different source entirely to avoid similar errors in the future.

### How do I fix the `Image could not be decoded` error?
Open the manga in <Navigation item="webview"/>, open a chapter, and wait for the images to load. If they don't load, you will need to look elsewhere to read that particular manga, as some of the former **Mangabox** sources, such as **Mangakakalot**, are now blocking entire regions.

## MangaPark

### How do I deal with duplicate chapters in MangaPark?
To solve this issue, follow the below steps.

1. Go to <Navigation item="browse"/> → <Navigation item="extensions"/>.
1. Click on **MangaPark** extension and then **Chapter List Source**.
1. Choose an option like **Smart list** or **Prioritize source**.
1. Go back to **MangaPark**'s chapter list and refresh it.

## Webtoons

### How do I fix the `Page list is empty` error?
You will have to open the manga entry in WebView and verify your age, as Webtoons has recently added age verifications on their website.

## KissManga and MangaRock

### Where are Kissmanga and MangaRock?
**KissManga** went under permanently in August 2020. **MangaRock** converted from a piracy app and went legit. They are now called **INKR** but have nowhere near their old library.