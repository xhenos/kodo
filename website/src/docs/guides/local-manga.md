---
title: Local manga
description: If you like to download and organize your media, then you want to know how to manage your own manga in Tachiyomi.
---

# Local manga

If you like to download and organize your media, then you want to know how to manage your own manga in Tachiyomi.

## Creating local manga

1. Create a folder named `local` in the `/Tachiyomi/` folder.

    > The `/Tachiyomi/` folder is located in the root of phone's **internal storage** or **external SD card** and it's **not related** to the `eu.kanade.tachiyomi/` folder or the download location in the settings.
1. Place correctly structured manga inside `/Tachiyomi/local/`.

    > If adding manga in folders it is recommended to add a file named `.nomedia` to the local folder so images do not show up in the gallery.
1. You should now be able to access the manga in _explore_Browse → **Local source**.

If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).

Supported chapter formats are folders with pictures inside (such as `.jpg`, `.png`, etc), `ZIP`/`CBZ`, `RAR`/`CBR` and `EPUB`.
But expect better performance with directories and `ZIP`/`CBZ`.

Remember to give the app storage permissions on **Android 6** and newer.

### Folder Structure

Tachiyomi requires a specific folder structure for local manga to be correctly processed.
Local manga will be read from the `Tachiyomi/local` folder.
Each manga must have a `Manga` folder and a `Chapter` folder.
Images will then go into the chapter folder.
See below for more information on archive files.
You can refer to the following example:

#### Example <Badge type="info" text="SD Card" /> {#example-sd-card}

<div class="tree">
	<ul>
		<img src="/img/folder.svg" class="tree-icon icon-folder">
		<span class="folder root">/sdcard/Tachiyomi/local</span>
		<li>
			<img src="/img/folder.svg" class="tree-icon icon-folder">
			<span class="folder main">[the series title]</span>
			<ul>
				<li>
					<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
					<span class="file jpg">cover.jpg</span>
				</li>
				<li>
					<img src="/img/folder.svg" class="tree-icon icon-folder">
					<span class="folder">chapter_1</span>
					<ul>
						<li><span class="file">image_1.ext</span></li>
						<li><span class="file">image_n.ext</span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" class="tree-icon icon-folder">
					<span class="folder">chapter_2</span>
					<ul>
						<li><span class="file">image_1.ext</span></li>
						<li><span class="file">image_n.ext</span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" class="tree-icon icon-folder">
					<span class="folder">chapter_n</span>
					<ul>
						<li><span class="file">image_1.ext</span></li>
						<li><span class="file">image_n.ext</span></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</div>

#### Example <Badge type="info" text="Phone storage" /> {#example-phone-storage}

<div class="tree">
	<ul>
		<img src="/img/folder.svg" class="tree-icon icon-folder">
		<span class="folder root">/storage/18F5-2C11/Tachiyomi/local</span>
		<li>
			<img src="/img/folder.svg" class="tree-icon icon-folder">
			<span class="folder main">[the series title]</span>
			<ul>
				<li>
					<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
					<span class="file jpg">cover.jpg</span>
				</li>
				<li>
					<img src="/img/folder.svg" class="tree-icon icon-folder">
					<span class="folder">chapter_1</span>
					<ul>
						<li><span class="file">image_1.ext</span></li>
						<li><span class="file">image_n.ext</span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" class="tree-icon icon-folder">
					<span class="folder">chapter_2</span>
					<ul>
						<li><span class="file">image_1.ext</span></li>
						<li><span class="file">image_n.ext</span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" class="tree-icon icon-folder">
					<span class="folder">chapter_n</span>
					<ul>
						<li><span class="file">image_1.ext</span></li>
						<li><span class="file">image_n.ext</span></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</div>

Tachiyomi will see four chapters in a single manga.
The path to the folder with images must contain both the manga title and the chapter name (as seen above).

### Archive Files

Archive files such as `ZIP`/`CBZ` are supported but the folder structure inside is not.
Any folders inside the archive file are ignored.
You must place the archive inside the `Manga` folder where the name will become the `Chapter` title.
All images inside the archive regardless of folder structure will become pages for that chapter.

#### Example <Badge type="info" text="ZIP" /> {#example-zip}

<div class="tree">
	<ul>
		<img src="/img/folder.svg" class="tree-icon icon-folder">
		<span class="folder root">/sdcard/Tachiyomi/local</span>
		<li>
			<img src="/img/folder.svg" class="tree-icon icon-folder">
			<span class="folder main">[the series title]</span>
			<ul>
				<li>
					<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
					<span class="file jpg">cover.jpg</span>
				</li>
				<li>
					<img src="/img/zip.svg" class="tree-icon icon-zip">
					<span class="file zip">chapter_1.zip</span>
					<ul>
						<li>
							<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
							<span class="file jpg">image_1.jpg</span>
						</li>
						<li>
							<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
							<span class="file jpg">image_n.jpg</span>
						</li>
					</ul>
				</li>
				<li>
					<img src="/img/zip.svg" class="tree-icon icon-zip">
					<span class="file zip">chapter_2.zip</span>
					<ul>
						<li>
							<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
							<span class="file jpg">image_1.jpg</span>
						</li>
						<li>
							<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
							<span class="file jpg">image_n.jpg</span>
						</li>
					</ul>
				</li>
				<li>
					<img src="/img/zip.svg" class="tree-icon icon-zip">
					<span class="file zip">chapter_n.zip</span>
					<ul>
						<li>
							<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
							<span class="file jpg">image_1.jpg</span>
						</li>
						<li>
							<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
							<span class="file jpg">image_n.jpg</span>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</div>

## Advanced

### Editing local manga details

It is possible to add details to local manga.
Like manga from other catalogs, you add information about the manga such as the author, artist, description, and genre tags.

To import details along with your local manga, you have to create a JSON file.
It can be named anything but it must be placed within the **Manga** folder.
A standard file name is `details.json`.
This file will contain the extended details about the manga in the `JSON` format.
You can see the example below on how to build the file.
Once the file is there, the app should load the data when you first open the manga or you can pull down to refresh the details.

You can copy the following example and edit the details as needed:

```json
{
	"title": "Example Title",
	"author": "Example Author",
	"artist": "Example Artist",
	"description": "Example Description",
	"genre": ["genre 1", "genre 2", "etc"],
	"status": "0",
	"_status values": ["0 = Unknown", "1 = Ongoing", "2 = Completed", "3 = Licensed", "4 = Publishing finished", "5 = Cancelled", "6 = On hiatus"]
}
```
::: tip
If you don't want to manually create the `details.json` file, you can alternatively use [this tool.](https://tachi-local.netlify.app/?utm\_source=tachi-website\&utm\_medium=referral\&utm\_campaign=tachi-website)
:::

### Using a custom cover image

It is also possible to use a custom image as a cover for each local manga.

To do this, you only need to place the image file, that needs to be named `cover.jpg`, in the root of the manga folder.
The app will then use your custom image in the local source listing.


<style scoped>
	@import "../../.vitepress/theme/styles/tree.styl"
</style>