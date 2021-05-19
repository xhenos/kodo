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

## Mangadex

### Version 5 API Rewrite

### Do I need to log in to search?
You do not need to log in to MangaDex to read manga anymore.

### Why are all the covers placeholders?
Covers do not work right now due to it not being in the API yet.

### Can I read and download manga from MangaDex right now?
Reading and downloading works fine.

### Why aren't there any new manga updates?
There are no new uploads as the frontend is not up yet, so the scanlators cannot upload anything new.

### Why are all my manga saying "Manga ID format has changed, migrate from MangaDex to MangaDex to continue reading"?
You need to [migrate](/help/guides/source-migration) all your MangaDex manga from MangaDex to MangaDex as MangaDex has changed their manga ID system from IDs to UUIDs.

### Will I lose my downloads if I migrate?
Downloads from before will not be removed or lost by the app.

### Why can I not restore from a JSON backup?
JSON backups are now unusable due to the ID change. You will have to manually re-add your manga.

## Mangakakalot, Manganelo, Mangabat and Mangairo

### What do `Page list is empty` and `Source URL has changed` mean?
The former **Mangabox** extensions have created new entries for many of the manga on their websites. The old entries are obsolete and will not work. To resolve this, [migrate](/help/guides/source-migration/) the manga from the source to itself to get the new entry, or better yet, to a different source entirely to avoid similar errors in the future.

### How do I fix the `Image could not be decoded` error?
Open the manga in <Navigation item="webview"/>, open a chapter, and wait for the images to load. If they do not load, you will need to look elsewhere to read that particular manga, as some of the former **Mangabox** sources, such as **Mangakakalot**, are now blocking entire regions.

## MangaPark

### How do I deal with duplicate chapters in MangaPark?
To solve this issue, follow the below steps.

1.  Go to <Navigation item="browse"/> → <Navigation item="extensions"/>.
1.  Click on **MangaPark** extension and then **Chapter List Source**.
1.  Choose an option like **Smart list** or **Prioritize source**.
1.  Go back to **MangaPark**'s chapter list and refresh it.

## Toonily 

### Why am I unable to access Toonily?
The Toonily source may have issues loading due to the Cloudflare bypass in WebView timing out.
