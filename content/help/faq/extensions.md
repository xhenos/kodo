---
title: Extensions
description: Need help with something? Most of your issues can probably be solved from this page.
sidebar: default
prev: /help/faq/application/
---

# Extensions FAQ

## General

### What are some recommended extensions?
Tachiyomi does not endorse or recommend any manga source, and there is no best extension. Rather, we encourage users to spend some time to try out a few sources themselves, and discover what sources work best for them. It's because what works well for somebody else, might not work well for you.

`<ElAlert type="info" title="Disclaimer" description="Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality." show-icon :closable="false"></ElAlert>`

### What are scanlator sources?
Manga that are not officially licensed are translated by scanlators, who either publish manga on their own website or **MangaDex**. Scanlator sources always provide the fastest manga updates and have the highest scan quality.

Some popular scanlator sources are  **MerakiScans**, **Hatigarm Scans** and **Leviatan Scans**. (in **Genkan** extension)

Learn more about scanlation in this **Wikipedia** [**article**](https://en.wikipedia.org/wiki/Scanlation).

### Which sources are in the multi-source extensions?
Some extensions contain multiple sources, look at the list below to find out which extension to install for the specific source that you want.

:::e-guide
User [SnakeDoc83](https://github.com/snakedoc83) has made a handy spreadsheet showing the different multi-source extensions and their sources.
:::note
Access the spreadsheet [here](https://tachiyomi.org/extensions-spreadsheet)
:::

### How do I request a new extension?
Open an issue [on GitHub](https://github.com/inorichi/tachiyomi-extensions/issues) if one does not already exist.

:::note
You can find the list of extensions to download [here](/extensions/)
:::

### Why won't the extensions install?
In some cases your phone might have some issues downloading the extensions, in those cases you can try installing them yourselves directly from the source.

To install just download the file for the extension you want and then install it, like how you installed **Tachiyomi**.

### How do I allow third-party installations?
::::: el-tabs
:::: el-tab-pane label="Android 8.0 and higher"
:::videolink
[<MaterialIcon icon="videocam"/> Click for Android 8.0 and newer video guide](/assets/faq_unknown-sources-a10.webm)
:::
When installing your first extension and are prompted that your phone *isn't allowed* to install unknown apps from that source, simply follow the prompt to allow it.

In *newer* versions of **Android** you need to enable **Install unknown apps** by a per-app basis.
::::
:::: el-tab-pane label="Android 7.1 and lower"
:::videolink
[<MaterialIcon icon="videocam"/> Click for Android 7.1 and older video guide](/assets/faq_unknown-sources-a7.webm)
:::
When installing your first extension and are prompted that your phone *isn't allowed* to install unknown apps from that source, simply follow the prompt to allow it.

In *older* versions of **Android** you only need to enable **Unknown sources** globally.
::::
:::::

:::note
If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)
:::

### How do I uninstall an extension?
Extensions for **Tachiyomi** are technically installed the same as normal apps. Either you uninstall them through the app section on your phone's settings or you go can do it in the app.

:::e-guide
To uninstall an extension from within **Tachiyomi**, go to <Navigation item="browse"/> → **Extensions** then tap **Uninstall** on the extension you want to remove.
:::

### Why don't I have extensions or any sources in Browse?
- **Tachiyomi** no longer have pre-installed extensions, this means that you will need to install extensions you want to use from the <Navigation item="browse"/> → **Extensions** menu.
- If you're getting the `Loader not implemented` error after clicking on a manga, you will need to reinstall the extensions you used to use.

### How do see sources of other languages?

You do this by following the steps below.

1. Go to <Navigation item="browse"/> → **Sources**.
1. Click on <Navigation item="filter"/> on the top right corner.
1. Scroll down until you find the language of your source and enable it.

### Why can't I restore my backup?
To restore backups, **Tachiyomi** requires to have extensions installed for the respective manga you want to restore.


### Why can't I find manga when searching Browse?
It might be because the title is worded differently. Follow any of the steps below:
- Look up the title on a search engine like **Google** or a manga tracking service such as [AniList](https://anilist.co/home).
- See which site has the series, often a single source will not satisfy all your needs.
- Download the extension for that source from <Navigation item="browse"/> → **Extensions** if it exists, read [this](/help/faq/#which-sources-are-in-the-multi-source-extensions) for a list of which extensions contains what sources.
- Go to <Navigation item="browse"/> and tap on a source then search for the manga again.

## MangaDex

### Why are there no results when searching?
:::videolink
[<MaterialIcon icon="videocam"/> Click for video guide](/assets/faq_mangadex-no-results.mp4)
:::

If you're not getting any results when searching **MangaDex** then you need to log in. To do so enter the <Navigation item="webview"/> for **MangaDex** then press the **Manga** drop-down and choose either **Sign up** or **Log in** to proceed with the login.

:::e-guide
To enter the **WebView** go to <Navigation item="browse"/> → <Navigation item="button_latest"/> next to **MangaDex**, then press on <Navigation item="webview"/> in the top right corner.
:::

### Why is MangaDex slow?
If pages are loading slowly or not at all, try:
- Making sure you have the *latest* version of the extension.
- Checking if **MangaDex** is either down, or is having the same issues.
- Trying to **Clear database** under <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/>.
- Trying to **Clear chapter cache** under <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/>.
- Going to <Navigation item="browse"/> → <Navigation item="extensions"/> → **MangaDex** → **Image Server** and then selecting a *different* server location.

`<ElAlert type="info" title="Disclaimer" description="Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality." show-icon :closable="false"></ElAlert>`

### Is there an alternate searching method?
**MangaDex** allows you to search using the ID number to find manga. The easiest way to get the ID is by opening the manga in your browser and looking at the URL.

:::e-guide
An example search would be **`id:23427`** which would return results for [Candy & Cigarettes](https://mangadex.org/title/23427/candy-cigarettes)
:::

### How do I deal with duplicate chapters in MangaDex?
This can be solved by opening **MangaDex** in <Navigation item="webview"/> and block the scanlator group whose chapter you don't want to see.

### How do I fix chapters from Mangaplus being broken?
Install the **MANGA Plus by SHUEISHA** extension instead and then migrate the manga that uses **MANGA Plus** on **MangaDex** onto the **MANGA Plus** source.

:::note
Read about source migration [here](/help/guides/source-migration/)
:::

## MangaPark

### How do I deal with duplicate chapters in MangaPark?
To solve this issue, follow the below steps.

1. Go to <Navigation item="browse"/> → <Navigation item="extensions"/>.
1. Click on **MangaPark** extension and then **Chapter List Source**.
1. Choose an option like **Smart list** or **Prioritize source**.
1. Go back to **MangaPark**'s chapter list and refresh it.

## Mangabox

### What does `Page list is empty` mean?
**Mangakakalot**/**Manganelo** have created new entries for manga on their sites again. Some old entries are obsolete and will not work. To resolve this, [migrate](/help/guides/source-migration/#source-migration) the manga from **Mangakakalot**/**Manganelo** to another source.

### What does `Source URL has changed` mean?
This means that the manga is dead and needs to be migrated from **Mangakakalot**/**Manganelo** to a different source. Refer to the guide for **Page list is empty** above.

### How do I fix the `Image could not be decoded` error?
Open the manga in WebView and wait for the image to comes up. If the image isn't loading you will need to look elsewhere to read that particular manga, as some Mangabox sources, such as Mangakakalot, are now blocking entire regions.

## Webtoons.com

### How do I fix the `Page list is empty` error?
You will have to open the manga entry in WebView and verify your age, as Webtoons has recently added age verifications on their site.

## Japscan

### Why are some Japscan chapters not loading?
Japscan has some manga that are scrambled using a different algorithm than others on their site. If you encounter a manga being scrambled, use a different source to read.

## KissManga and MangaRock
:::: el-collapse
:::el-collapse-item title="Where is KissManga?"
**KissManga** went under permanently in August 2020, we will not add something that doesn't exist back..
:::
:::el-collapse-item title="Where is MangaRock"
**MangaRock** converted from a piracy app and went legit, they are now called **INKR** but is nowhere near what they were before.
:::
::::
