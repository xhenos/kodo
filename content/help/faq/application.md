---
# Page title and opening header
title: Application
description: Need help with something? Most of your issues can probably be solved from this page.
cms:
  collection: faq
  entry: application
  edit: true
sidebar: default
next: /help/faq/settings/
---

## Library

### How can I see how many chapters I've downloaded?
This can be done by enabling **Download badges** under <Navigation item="library"/>.

:::guide
Enable it by going to <Navigation item="library"/> → <Navigation item="filter"/> → **Display** section and then checking the **Download badges** option at the bottom.
:::

### How do I ignore duplicate chapters?
Sometimes, you find a manga that is translated by more than one group. Because of this, you get multiple releases for each chapter in the manga. There are several ways to skip the duplicate chapters:

-   On the manga page, tap on <Navigation item="filter"/> → **Sort** and choose **By chapter number**. Doing this will cause the reader to skip duplicates as you read.
-   Bookmark or mark as read the unwanted chapters, then tap on <Navigation item="filter"/> → **Filter** and double-tap **Bookmarked** or single-tap **Unread**, respectively. This will hide any bookmarked or read chapters and skip them as you read along, as long as you have **Skip filtered chapters** enabled under <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_reader"/> → **Reading**.
-   Migrate to another source that does not have duplicates. For more information on how to migrate a manga, see the [migration guide](/help/guides/source-migration/).


### Why are some cover thumbnails corrupted, white, or showing a broken page?
The thumbnail download likely did not complete correctly. To fix this, refresh covers in settings.

::: guide
Refresh your covers by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> then pressing **Refresh library manga covers**.
:::

#### Why have some manga chapters been marked as unread when I haven't touched them?
The URLs of the manga chapters have changed, so Tachiyomi detects the chapter(s) as new chapters.


## Browse

### Why can I not find a certain manga?
Sometimes you can struggle to find a source hosting the manga you're looking for, look here for some tips to help you find it.

:::guide Tips to find your manga
1.  Look up the title on [Google](https://google.com/) or a manga database such as [MangaUpdates](https://www.mangaupdates.com/).
1.  See if a website or scanlator has the series, then check the [Extensions](/extensions/) list.

#### If you found the website/scanlator in the list
Download the corresponding extension, tap on it under <Navigation item="browse"/> → **Sources**, and then search for the manga there.

#### If you didn't find the website/scanlator in the list
If you found a website or scanlator that hosts your manga but doesn't exist as a source or extension, then you can see if its [already been requested](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) or you can [request it yourself](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose).

If the website/scanlator group doesn't have an online manga reader, you can download the manga manually and set up [local manga](/help/guides/reading-local-manga).
:::

## Reader

### Why are some images not displayed?
Aside from network issues, it could be because the images are too big or that the decoder doesn't support that image type.

## Local Manga

### How do I import my manga into Tachiyomi?
We recommend you to read [this](/help/guides/reading-local-manga) guide on how to do so.

### What do I do if I can't find the Tachiyomi folder?
If you do not see the **Tachiyomi** folder on your device, try setting the download location to default and downloading a chapter of any manga so that Tachiyomi creates a folder. If needed, you may manually create a Tachiyomi folder as well.

::: guide
Set download location to default by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_downloads"/> → **Download location** and selecting first option. Restart the app after changing download location.
:::

### How do I fix empty/blank covers on my local manga?
Sometimes some covers for local manga aren't displayed. Follow these steps to fix it:

::: guide
1.  Make sure you've created the right folder structure. To check it, open the manga with the missing cover and check if you can read chapters in the app. If not, follow [this](/help/guides/local-manga) guide first.
1.  Take a screenshot of which chapters you've read, and then remove manga from the library.
1.  Go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> and tap **Clear database**. This only affects manga that aren't in your library.
1.  Go to <Navigation item="browse"/> → **Local source** and find the manga. The cover should be fixed now. Add the manga back to your library, mark your read chapters, and re-add tracking if needed.
:::

::: note
Related GitHub issue: [#932](https://github.com/tachiyomiorg/tachiyomi/issues/932)
:::

## Android 11

### What changed in Android 11?
In Android 11, Google began forcing users to use [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage), which was introduced in Android 5.0 Lollipop, but Google only began forcing developers to use it on Android 11. Some OEMs seem to better implement Scoped Storage than others, with some users not running into any issues while users using other phone brands have multitudes of problems.

### What does it mean for Tachiyomi?
The introduction of Scoped Storage means that many storage-related functions that Tachiyomi uses may be much slower due to the inherent slowness of Scoped Storage, as outlined [here](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/). These include deleting chapters, library load times, accessing the folders outside the data folders to download to or read from, and more.

### Is there any way to improve performance?

You can try the command below if you know how to use ADB, a guide on installing it is also outlined on the site [here](/help/guides/troubleshooting/#what-are-some-common-errors).
```
adb shell cmd appops set eu.kanade.tachiyomi Android:legacy_storage allow
```
This command enables general storage access for the app, allowing Tachiyomi to use the old general storage access interface. 

If you are using a Tachiyomi Preview or a fork, replace `eu.kanade.tachiyomi` with the corresponding fork's package name.

## Miscellaneous

### What is Tachiyomi Preview?
It's a weekly updated version of the app. It contains features that can be added to Tachiyomi in the future, but there is a higher chance for bugs. Tachiyomi Preview is used by developers and contributors to test the app and find bugs.

If you are willing to use Tachiyomi Preview, be sure to [turn on auto-backup](/help/guides/creating-backups/#turning-on-auto-backups) to prevent losing your library due to potential bugs.

### Why can't I uninstall Tachiyomi?

On **Android 10**, a bug was introduced which prevented users from uninstalling the app if the phone had a MicroSD card. To fix the issue, please remove the MicroSD card from the phone first, then uninstall Tachiyomi.

### Will there be an iOS version?
There is no iOS version and no plans for one. Since iOS and Android apps don't share code it's hard to port.

### Will Tachiyomi ever be on the Google Play Store?
Due to Google Play's content policy, almost certainly not, as they do not allow the APK system to work. The content on some sites will lead to Google taking it down at some point, and [Inorichi](https://github.com/inorichi) does not want to have to deal with it as they have stated [before](https://github.com/tachiyomiorg/tachiyomi/issues/1745#issuecomment-441208074)

### How can I report Tachiyomi copycats on the Google Play Store?
If you're on desktop, fill out [this](https://support.google.com/googleplay/android-developer/contact/takedown) form following [these](https://pastebin.com/08eeuJxH) steps.

### Can Tachiyomi read Light Novels?
No. Tachiyomi is an image parser, meaning it can't parse text.

### Can I revert back from the Material Design 2 update of Tachiyomi?
While there will never be a toggle between the two UI versions, you can continue to use the old UI version by using [TachiyomiAZ](https://tachiyomi.org/forks/TachiyomiAZ/).

### Why can I see manga pages in my device's photo gallery?
Tachiyomi adds a `.nomedia` file to the Downloads folder by default to prevent this from happening, but sometimes it does not work, or something goes wrong. To fix this, all you need to do is create the file yourself. Name it `.nomedia` and place it in your downloads folder. If you have the same problem with your local manga, place the `.nomedia` file in the local folder.

### I lost everything, what now?
To avoid data loss in the future, you can use the automatic backup feature.

:::note
Learn how to create automatic backups [here](/help/guides/creating-backups/#turning-on-auto-backups/)
:::

