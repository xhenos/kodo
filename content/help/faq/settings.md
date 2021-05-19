---
title: Settings
description: Need help with something? Most of your issues can probably be solved from this page.
cms:
  collection: faq
  entry: settings
  edit: true
sidebar: default
prev: /help/faq/application/
next: /help/faq/extensions/
---


## Downloads

### How do I download several chapters or manga simultaneously?
The app does not allow parallel downloads from one source to prevent IP bans caused by too many requests. We know that speed is being sacrificed, but it is better than an overall inaccessible source.

However, if you download several manga from different sources, the app will start downloading simultaneously from up to 5 different sources.
### Why are Downloads unstable?
It is likely an issue to do with your connection to your network or the source. Tachiyomi will notify you of what error it has encountered trying to download.

### Can you make it possible to store manga on both internal storage and external SD-card?
At the moment, no. You could try using symlinks but that requires having your phone rooted.

:::note
Read more about rooting your phone [here](https://www.xda-developers.com/root/)
:::

## Tracking

### How do I log in with Kitsu?
To log in with Kitsu, you need to use your email address as your username.

### Why am I unable to find a manga in MAL's search results?
If you cannot find a manga by name, you can look it up on MAL and then search for it in Tachiyomi using the following format: `id:<id from manga URL>`. You can also search for a manga on your MAL profile list by searching in the following format: `my:<manga name>`.

::: note
Related GitHub issue: [#65](https://github.com/tachiyomiorg/tachiyomi/issues/65)
:::


## Application Updates

### How do I enable automatic updates?
From version **0.9.0** and onwards, Tachiyomi has had automatic updates for the app enabled by default. The **Preview** version also has automatic updates enabled by default.

However, if you think you are on an outdated version, go to <Navigation item="more"/> → <Navigation item="about"/> and tap on **Check for updates**.

### Why are automatic updates not working?

Certain Android skins like MIUI have very aggressive battery saving, which can kill the app in the background. To whitelist Tachiyomi from your battery saver, go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> and tap on **Disable battery optimization**. If that does not work, you can also visit [DontKillMyApp](https://dontkillmyapp.com/) to see what battery saving options your device has and how to disable or circumvent them.

## User Interface

### Can I change the app language?
**Tachiyomi** is translated into 40+ different languages. By default, the app follows the language used on your device.

::: guide
You can change language by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_general"/> then pressing **Language**.
:::


## Miscellaneous

### Will there ever be a dual-page reader option?
The logic required to make a dual-page reader automatically work along with scanlator page inconsistencies and other issues means it is unlikely to be added at this time.
