---
title: TachiyomiAZ
description: This hentai focused fork is based off of TachiyomiEH, it has most features and fixes from Tachiyomi, as well as features from TachiyomiJ2K.
forkName: tachiyomi-az
metaImage: /ogimage-az.png
metaColor: "#FFCC4D"
onThisPage: false
path: /forks/TachiyomiAZ/
---

import "~/assets/style/tachiyomiaz.styl"

# <g-image class="headerLogo" src="~/images/forks_logo-az.png" width="64" height="64" fit="contain" immediate /> TachiyomiAZ

import DownloadButtons from '~/components/DownloadButtons.vue'
import DownloadButton from '~/components/DownloadButton.vue'

<DownloadButtons>
  <DownloadButton fork="az" title="Stable" />
  <DownloadButton fork="az" title="Preview" isPreview />
  <DownloadButton fork="az" title="GitHub" isGithub />
  <template slot="footer">
		<p>
		  Requires
		  <b>Android 5.0</b>
			or higher.
		</p>
	</template>
</DownloadButtons>

<div class="azContainer">
  <div class="azMarquee">
    <div class="azWiggleText">
      <span class="azText"><i>The BEST fork</i> --az4521</span>
    </div>
  </div>
</div>


## Introduction
**TachiyomiAZ** is maintained by **[az4521](https://github.com/az4521)** and [Syer10](https://github.com/jobobby04).

This hentai focused fork is based off of **[TachiyomiEH](/forks/TachiyomiEH/)**, it has most features and fixes from **Tachiyomi**, as well as features from **[TachiyomiJ2K](/forks/TachiyomiJ2K/)**. It has decided to keep the hamburger menu style of navigation, compared to the other forks that are moving to the new bottom navigation style.

## Features
**Special Sources** (integrated plus added features)
- E-Hentai/ExHentai
- nHentai
- Hitomi.la
- 8Muses
- HBrowse
- Perv Eden

**Delegated Sources** (Sources with added features if installed)
- Puruin
- Tsumino
- HentaiCafe (Foolside)

**From EH:**
- Save Searches for use later
- AutoScroll
- Boost Page (force redownload page)
- Page download thread customization
- Predownload the whole chapter while reading (Optional)
- Retry immidently instead of wating for the rest of the preloaded pages to finish downloading
- Customize image cache size (how much space Tachiyomi has available to store future pages)
- Sync your favorites with your EHentai/ExHentai account
- Batch import E-Hentai/ExHentai URLs (import single URLs by pasting them into the source search box)
- Automatic CAPTCHA solving

**From EH and fixed/changed:**
- Auto Migration (Originally from EH, it was then improved in J2k, and we have reintegrated the J2k version)
- Merged Sources (Merge 2 or more versions of a manga to get chapters from all of them)
- App and notification lock with fingerprint and PIN unlock
- Restoring backups in the background
- Fixed Tsumino and Hitomi
- Language filtering search options for nHentai
- Tri-state filter when filtering in library
- Random bugfixes

**Original AZ Features:**
- Maintained hamburger navigation
- Grid view corner rounding configuration
- Manga recommendations

<g-image class="headerLogo" src="~/images/forks_gunz-az.png" width="128" height="128" fit="contain"/>
