---
title: Local manga
description: All the information you would need to read your own local manga.
cms:
  collection: guides
  entry: local-manga
  edit: true
sidebar: default
prev: /help/guides/categories/
next: /help/guides/reader-settings/
---

import LocalMangaStructure from '~/components/LocalMangaStructure.vue'

:::guide Creating local manga

1.  Create a folder named `local` in the `/Tachiyomi/` folder.
	> The `/Tachiyomi/` folder is located in the root of phone's **internal storage** or **external SD card** and it's **not related** to the `eu.kanade.tachiyomi/` folder or the download location in the settings.
1.  Place correctly structured manga inside `/Tachiyomi/local/`.
	> If adding manga in folders it is recommended to add a file named `.nomedia` to the local folder so images do not show up in the gallery.
1.  You should now be able to access the manga in <Navigation item="browse"/> → **Local source**.

:::

If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).

Supported chapter formats are folder with pictures inside (such as `.jpg`, `.png`, etc), `ZIP`/`CBZ`, `RAR`/`CBR` and `EPUB`. But expect better performance with directories and `ZIP`/`CBZ`.

:::c-warning
Remember to give the app storage permissions on **Android 6** and newer.
:::

## Folder Structure

Tachiyomi requires a specific folder structure for local manga to be correctly processed. Local manga will be read from the `Tachiyomi/local` folder. Each manga must have a `Manga` folder and a `Chapter` folder. Images will then go into the chapter folder. See below for more information on archive files. You can refer to the following example:

:::guide Example (Folder)
<LocalMangaStructure folder />
:::

Tachiyomi will see four chapters in a single manga.
The path to the folder with images must contain both the manga title and the chapter name (as seen above).

:::guide
#### Example structure using the file manager
Here, the manga name is **test** so the file structure is `/Tachiyomi/local/test/ch1/images`.
<img src="/assets/guides_local-manga.jpg"/>
:::

## Archive Files
Archive files such as `ZIP`/`CBZ` are supported but the folder structure inside is not. Any folders inside the archive file are ignored. You must place the archive inside the `Manga` folder where the name will become the `Chapter` title. All images inside the archive regardless of folder structure will become pages for that chapter.

:::guide Example (ZIP)
<LocalMangaStructure zip />
:::


## Advanced

### Editing local manga details

It is possible to add details to local manga. Like manga from other catalogs, you add information about the manga such as the author, artist, description, and genre tags.

To import details along with your local manga, you have to create a json file. It can be named anything but it must be placed within the **Manga** folder. A standard file name is `details.json`. This file will contain the extended details about the manga in the `JSON` format. You can see the example below on how to build the file. Once the file is there, the app should load the data when you first open the manga or you can pull down to refresh the details.

You can copy the following example and edit the details as needed:
``` json
{
	"title": "Example Title",
	"author": "Example Author",
	"artist": "Example Artist",
	"description": "Example Description",
	"genre": ["genre 1", "genre 2", "etc"],
	"status": "0",
	"_status values": ["0 = Unknown", "1 = Ongoing", "2 = Completed", "3 = Licensed"]
}
```

### Using a custom cover image

It is also possible to use a custom image as a cover for each local manga.

To do this, you only need to place the image file, that needs to be named
`cover.jpg`, in the root of the manga folder. The app will then use your
custom image in the local source listing.
