<template>
	<Layout>
		<div class="pt-8 md:pt-16">
			<div class="flex flex-col items-center">
				<div class="flex flex-col items-center mb-2 text-ui-primary">
					<Logo :width="80" />
					<h2 class="text-3xl text-6xl font-medium tracking-tighter border-none">
						{{ meta.siteName }}
					</h2>
				</div>
				<h1 class="text-xl font-normal text-center lg:text-3xl">
					{{ meta.siteDescription }}
				</h1>

				<div class="flex justify-center mt-8">
					<g-link
						to="/download/"
						class="flex items-center px-6 py-4 ml-auto mr-2 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
					>
						<DownloadIcon class="mr-4" size="1x" />
						Download
					</g-link>
					<g-link
						to="/help/guides/getting-started/"
						class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
					>
						<BookIcon class="mr-4" size="1x" />
						User guide
					</g-link>
				</div>
			</div>

			<div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

			<div class="flex flex-wrap justify-center -mx-4">
				<div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
					<UserCheckIcon size="3x" class="mb-6 text-ui-primary" />
					<h3 class="font-bold tracking-wide uppercase text-ui-primary">
						Tracking
					</h3>
					<p class="text-lg text-center">
						Automatically keep track of your manga with MyAnimeList, AniList, Kitsu, Shikimori, and Bangumi.
					</p>
				</div>

				<div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
					<PackageIcon size="3x" class="mb-6 text-ui-primary" />
					<h3 class="font-bold tracking-wide uppercase text-ui-primary">
						Extensions
					</h3>
					<p class="text-lg text-center">
						Online and offline reading from sources like MangaDex, MangaKakalot, and hundreds more.
					</p>
				</div>

				<div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
					<LayoutIcon size="3x" class="mb-6 text-ui-primary" />
					<h3 class="font-bold tracking-wide uppercase text-ui-primary">
						Customization
					</h3>
					<p class="text-lg text-center">
						A configurable reader with multiple reading modes, custom color filters, and other settings.
					</p>
				</div>
			</div>

			<p class="mt-8 text-center">
				<a href="https://www.apache.org/licenses/LICENSE-2.0">Apache Licensed</a>
				| Copyright &copy; 2015{{ " - " + new Date().getFullYear() }} Javier Tomás
			</p>
		</div>
	</Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Logo from "@/components/Logo";
import { DownloadIcon, BookIcon, UserCheckIcon, LayoutIcon, PackageIcon } from "vue-feather-icons";

export default {
	components: {
		Logo,
		DownloadIcon,
		BookIcon,
		UserCheckIcon,
		LayoutIcon,
		PackageIcon,
	},

	computed: {
		meta() {
			return this.$static.metadata;
		},
	},

	metaInfo() {
		const title = this.$static.metadata.siteName;
		const description = this.$static.metadata.siteDescription;

		return {
			title: "Home",
			meta: [
				{
					name: "description",
					content: description,
				},
				{
					key: "og:title",
					name: "og:title",
					content: title,
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: title,
				},
				{
					key: "og:description",
					name: "og:description",
					content: description,
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: description,
				},
			],
		};
	},
};
</script>

<style lang="scss">
.home-links a {
	margin-right: 1rem;
}
</style>
