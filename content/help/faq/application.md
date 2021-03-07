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

# 🎆 THIS PAGE NEEDS UPDATING

## Library

### How can I see how many chapters I've downloaded?
This can be done by enabling **Download badges** under <Navigation item="library"/>.

:::guide
Enable it by going to <Navigation item="library"/> → <Navigation item="filter"/> → **Display** section and then checking the **Download badges** option at the bottom.
:::

### Why are some covers white after restoring from backup?
The URL to the cover has probably changed. To fix this, refresh the metadata of your library.

:::guide
Refresh your metadata by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> then pressing **Refresh library metadata**.
:::

### How do I ignore chapters from certain scanlator groups?
Every now and then you find a manga that is translated by more than one group. Because of this, you get multiple releases for each chapter in the manga. The easiest way to fix this is to change sorting to **Total chapters**. You won't see any changes but, when you start reading you'll automatically skip the duplicate releases.

:::guide
Change library sorting by going to <Navigation item="library"/> → <Navigation item="filter"/> → **Sort** section then in this case selecting **Total chapters**.
:::

## Browse

### Why can't I find X manga?
Sometimes you can struggle to find a source hosting the manga you're looking for, look here for some tips to help you find it.

:::guide Tips to find your manga
1. Look up the title on [Google](https://google.com/) or a manga database such as [MangaUpdates](https://www.mangaupdates.com/).
1. See if a website or scanlator has the series, then check the [Extensions](/extensions/) list.

#### If you found the website/scanlator in the list
Download the corresponding extension, go to the source, then search for the manga there.

#### If you didn't find the website/scanlator in the list
If you found a website or scanlator that hosts your manga but doesn't exist as a source or extension, then you can see if its [already been requested](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) or you can [request it yourself](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose).

If the website/scanlator group doesn't have an online manga reader, you can download the manga manually and set up [local manga](/help/guides/reading-local-manga).
:::

## Reader

### Why are some images not displayed?
Aside from network issues, it could be because the images are too big or that the decoder doesn't support that image type.

## Downloads

### Why are Downloads unstable?
Be aware that it could be a network issue on your device or on the catalog you are trying to download from.

### Can you make it possible to store manga on both internal storage and external SD-card?
At the moment, no. You could try using symlinks but that requires having your phone rooted.

:::note
Read more about rooting your phone [here](https://www.xda-developers.com/root/)
:::

## Tracking

### Why can't I find manga in MAL's search results?
You can search a manga from your MAL profile's list by searching in the following format: `my:<manga>`

:::note
Related GitHub issue: [#65](https://github.com/tachiyomiorg/tachiyomi/issues/65)
:::

## Local Manga

### How do I import my manga into Tachiyomi?
We recommend you to read [this](/help/guides/reading-local-manga) guide on how to do so.

### What do I do if I can't find the Tachiyomi folder?
If you don't see a **Tachiyomi** folder on your device, try downloading a chapter of any manga or creating a backup so that the folder can be created.

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

### I see manga images in my phone gallery, what gives!?
Tachiyomi by default adds a `.nomedia` file to prevent this from happening but sometimes it doesn't work or something went wrong. To fix this, all you need to do is create the file yourself. Name it `.nomedia` and place it in your download folder.

### I lost everything, what now?
To avoid data loss in the future, you can use the automatic backup feature.

:::note
Learn how to create automatic backups [here](/help/guides/creating-backups/#turning-on-auto-backups/)
:::
