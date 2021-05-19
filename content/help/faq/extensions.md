---
title: Extensions
description: Need help with something? Most of your issues can probably be solved from this page.
cms:
  collection: faq
  entry: extensions
  edit: true
sidebar: default
prev: /help/faq/settings/
next: /help/faq/sources/
---

import Tabs from "~/components/Tabs.vue";
import Tab from "~/components/Tab.vue";


## General

### What are some recommended extensions?
Tachiyomi does not endorse or recommend any manga source, and there is no best extension. Rather, we encourage users to spend some time to try out a few sources themselves, and discover what sources work best for them. It's because what works well for somebody else, might not work well for you.

:::alert Disclaimer
Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality.
:::

### What are scanlator sources?
Manga that are not officially licensed are translated by scanlators, who either publish manga on their own website or **MangaDex**. This practice contrasts with official sources like **MANGA Plus By SHUEISHA** or **VIZ Shonen Jump**, which host officially licensed and translated manga.

Learn more about scanlation in this [**Wikipedia article**](https://en.wikipedia.org/wiki/Scanlation).

### How do I request a new extension?
Open an issue [on GitHub](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) if one does not already exist.

:::note
You can find the list of extensions to download [here](/extensions/)
:::

### I am having problems installing an extension; what can I do?
In some cases, your device might have some issues downloading and automatically installing an extension. In those cases, you can manually download and install the extension yourself. Go to the [extension list](/extensions/), find the extension you want, and tap **Download**. Once the .apk file has been downloaded, use your file manager to find it and open it. A prompt to install it as an app should pop up. Once it is done installing, it will be automatically added to Tachiyomi as a source.

### How do I allow third-party installations?

<!-- This is a house of cards it will break if you touch it the wrong way -->
<tabs>
<tab name="Android 8.0 and higher" :selected="true">

:::videolink
[<MaterialIcon icon="videocam"/> Click for Android 8.0 and newer video guide](/assets/faq_unknown-sources-a10.webm)
:::

When installing your first extension and are prompted that your phone *isn't allowed* to install unknown apps from that source, simply follow the prompt to allow it.

In *newer* versions of **Android** you need to enable **Install unknown apps** by a per-app basis.

</tab>
<tab name="Android 7.1 and lower">

:::videolink
[<MaterialIcon icon="videocam"/> Click for Android 7.1 and older video guide](/assets/faq_unknown-sources-a7.webm)
:::


When installing your first extension and are prompted that your phone *isn't allowed* to install unknown apps from that source, simply follow the prompt to allow it.

In *older* versions of **Android** you only need to enable **Unknown sources** globally.

</tab>
</tabs>

:::note
If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)
:::

### How do I uninstall an extension?
Extensions for **Tachiyomi** are technically installed the same as normal apps. Either you uninstall them through the app section on your device's settings or do it in **Tachiyomi**

:::guide
To uninstall an extension from within **Tachiyomi**, go to <Navigation item="browse"/> → **Extensions** then tap **Uninstall** on the extension you want to remove.
:::

### Why don't I have extensions or any sources in Browse?
-   **Tachiyomi** no longer have pre-installed extensions, this means that you will need to install extensions you want to use from the <Navigation item="browse"/> → **Extensions** menu.
-   If you're getting the `Loader not implemented` error after clicking on a manga, you will need to reinstall the extensions you used to use.

### How do see sources of other languages?

You do this by following the steps below.

1.  Go to <Navigation item="browse"/> → **Sources**.
1.  Click on <Navigation item="filter"/> on the top right corner.
1.  Scroll down until you find the language of your source and enable it.

### Why can't I restore my backup?
To restore backups, **Tachiyomi** requires to have extensions installed for the respective manga you want to restore.


### Why can't I find manga when searching Browse?
It might be because the title is worded differently. Follow any of the steps below:
-   Look up the title on a search engine like **Google** or a manga tracking service such as [AniList](https://anilist.co/home).
-   See which site has the series, often a single source will not satisfy all your needs.
-   Download the extension for that source from <Navigation item="browse"/> → **Extensions** if it exists, read [this](/help/faq/#which-sources-are-in-the-multi-source-extensions) for a list of which extensions contains what sources.
-   Go to <Navigation item="browse"/> and tap on a source then search for the manga again.


## Removed Extensions

### Why am I unable to download an extension that used to exist?
Extensions tend to be removed for a variety of reasons: 

-   They become too much of a cat and mouse game to maintain due to the website owners changing the site frequently to deter scrapers.
-   The site scrambles images in more than one way, making it impossible to make every image unscrambleable.
-   A scanlator team requests the removal of their site from Tachiyomi.
-   The site is paywalled.
-   Require reverse engineering another app.
-   The site has been shut down.

A list of extensions that have been removed is available [here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/3475), but it does not include sites that have gone offline.

## Split Extensions
Extensions have been split due to the sheer number of extensions in a single extension, with Madara reaching over 200 extensions at one point, making it unreasonable for both devs and users to filter through extensions. For a deeper explanation of the issue, [this](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/4287) GitHub issue explains in more detail.

### What extensions have been split?
All of them have been split.

### Why does my multisource extension show up as obsolete? 
The multisource extension is obsolete because it has been split. The multisource extension has been removed from the repository. It is not actually obsolete.

### How do I move to a split extension?
Install the extension that your manga is from, and then uninstall the multisource extension. If the manga shows the source as a bunch of numbers, force close the app. For known issues with split extensions, go to this [GitHub issue](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/5672).

### Do I need to migrate? 
No, unless expressly stated, the internal ID of sources has not changed, so migration is unnecessary.

#### What if I uninstall the multisource extension before I install the singular extensions?
See what extension IDs correspond to what extensions [here](https://pastebin.com/raw/QX2scdRT).
