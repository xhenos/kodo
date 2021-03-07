<template>
	<Layout>
		<div id="MarkdownPage" class="flex flex-wrap items-start justify-start">
			<div
				v-if="this.$page.markdownPage.onThisPage == true"
				class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky"
				style="top: 4rem"
			>
				<OnThisPage />
			</div>

			<div
				class="markdownContent order-1"
				:class="{
					'md:w-2/3': this.$page.markdownPage.onThisPage == true,
					'lg:px-56': this.$page.markdownPage.onThisPage == false && this.$page.markdownPage.sidebar == '',
				}"
			>
				<div v-if="this.$page.markdownPage.icon" class="contentHeader contentIcon">
					<img
						class="headerLogo"
						:src="this.$page.markdownPage.icon"
						width="64"
						height="64"
						fit="contain"
						immediate
					/>
					<h1>{{ $page.markdownPage.title }}</h1>
				</div>
				<div v-else class="contentHeader">
					<h1>{{ $page.markdownPage.title }}</h1>
				</div>

				<VueRemarkContent id="Markdown" />

				<div v-if="this.$page.markdownPage.cms && this.$page.markdownPage.cms.edit" class="mt-2 pt-4">
					<EditThisPage />
				</div>

				<div
					v-if="this.$page.markdownPage.prev || this.$page.markdownPage.next"
					class="mt-6 pt-8 border-t border-ui-border"
				>
					<NextPrevLinks />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query($id: ID!) {
	markdownPage(id: $id) {
		id
		title
		description
		icon
		forkName
		metaImage
		metaImageType
		metaColor
		path
		content
		sidebar
		onThisPage
		next
		prev
		cms {
			collection
			entry
			edit
		}
		headings {
			depth
			value
			anchor
		}
	}
	allMarkdownPage {
		edges {
			node {
				path
				title
			}
		}
	}
}
</page-query>

<script>
import OnThisPage from "@/components/OnThisPage.vue";
import NextPrevLinks from "@/components/NextPrevLinks.vue";
import EditThisPage from "@/components/EditThisPage.vue";

export default {
	components: {
		OnThisPage,
		NextPrevLinks,
		EditThisPage,
	},
	metaInfo() {
		const title = this.$page.markdownPage.title;
		const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;
		const image =
			process.env.SITE_URL + process.env.SITE_URL_PREFIX + this.$page.markdownPage.metaImage ||
			process.env.SITE_URL + process.env.SITE_URL_PREFIX + "/ogimage.png";
		const imageType = this.$page.markdownPage.metaImageType || "summary";
		const color = this.$page.markdownPage.metaColor || process.env.SITE_COLOR || "#667EEA";

		return {
			title: title,
			meta: [
				{
					name: "description",
					content: description,
				},
				{
					key: "og:type",
					name: "og:type",
					content: "website",
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
				{
					key: "og:image",
					name: "og:image",
					content: image,
				},
				{
					key: "twitter:image",
					name: "twitter:image",
					content: image,
				},
				{
					key: "theme-color",
					name: "theme-color",
					content: color,
				},
				{
					key: "twitter:card",
					name: "twitter:card",
					content: "summary_large_image",
				},
			],
		};
	},
};
</script>

<style lang="stylus">

#Markdown {

	a {
		color var(--color-ui-primary)

		&:hover {
			color var(--color-ui-primary-dark)
		}
	}

	h2,
	h3 {
		padding-top 6rem
		margin-top -5rem
	}

	h2 {

		&:before {
			content " "
			display block
			margin-bottom 1.5rem
			border-top 1px solid var(--color-ui-border)
		}
	}

	ul,
	ol {
		list-style revert
		padding revert
		padding-left 1.25rem
	}

	ul {

		li {
			margin-bottom 0.5rem
		}
	}
}


.markdownContent {
	.contentHeader {
		display flex
		align-items center
		margin-top 2rem
		flex-wrap wrap
		&.contentIcon {
			img {
				margin-left 0.25rem
			}

			a,
			h1 {
				margin-left 0.5rem
			}

			h1 {
				margin 0
				padding 0
				margin-left 0.75rem
			}
		}
	}
}
</style>
