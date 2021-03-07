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
Manga that are not officially licensed are translated by scanlators, who either publish manga on their own website or **MangaDex**. Scanlator sources always provide the fastest manga updates and have the highest scan quality.

Some popular scanlator sources are  **MerakiScans**, **Hatigarm Scans** and **Leviatan Scans**. (in **Genkan** extension)

Learn more about scanlation in this **Wikipedia** [**article**](https://en.wikipedia.org/wiki/Scanlation).

### Which sources are in the multi-source extensions?
Some extensions contain multiple sources, look at the list below to find out which extension to install for the specific source that you want.

:::guide
User [SnakeDoc83](https://github.com/snakedoc83) has made a handy spreadsheet showing the different multi-source extensions and their sources.

::: note
Access the spreadsheet [here](https://tachiyomi.org/extensions-spreadsheet)
:::

:::

### How do I request a new extension?
Open an issue [on GitHub](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) if one does not already exist.

:::note
You can find the list of extensions to download [here](/extensions/)
:::

### Why won't the extensions install?
In some cases your phone might have some issues downloading the extensions, in those cases you can try installing them yourselves directly from the source.

To install just download the file for the extension you want and then install it, like how you installed **Tachiyomi**.

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
Extensions for **Tachiyomi** are technically installed the same as normal apps. Either you uninstall them through the app section on your phone's settings or you go can do it in the app.

:::guide
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
