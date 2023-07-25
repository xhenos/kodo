---
title: TachiyomiSY
description: LongDesc

layout: home
pageClass: page-tachiyomisy

hero:
  name: TachiyomiSY
  text: Hentai-focused
  tagline: Keeping up-to-date with Tachiyomi while also adding exclusive features
  image: /forks/forks_logo-sy.png
  actions:
    - theme: brand
      text: Download
      link: https://github.com/jobobby04/TachiyomiSY/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/jobobby04/TachiyomiSY

features:
  - title: Hentai-focused
    details: Adds several features to enhance your Hentai experience.
    icon: 🔞
  - title: Manga recommendations
    details: Get recommendations from MyAnimeList and AniDB.
    icon: 📚
  - title: Several exclusive fea
    details: Keeps the old design of Tachiyomi with hamburger menu.
    icon: 👵

theme: "#CE2828"
image: /forks/forks_logo-sy.png
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/jobobby04.png",
    name: "jobobby04",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/jobobby04" }
    ]
  },
  {
    avatar: "https://www.github.com/she11sh0cked.png",
    name: "she11sh0cked",
    title: "Extra tracking, filter, recommendations, and more",
    links: [
      { icon: "github", link: "https://github.com/she11sh0cked" }
    ]
  },
  {
    avatar: "https://www.github.com/az4521.png",
    name: "az4521",
    title: "Base recommendations and AZ",
    links: [
      { icon: "github", link: "https://github.com/az4521" }
    ]
  }
]
</script>

<style>
	@import "../.vitepress/theme/styles/forks/tachiyomi-sy.css"
</style>