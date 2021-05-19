<template>
	<Layout>
		<div id="MarkdownPage">
			<div class="toc" v-if="hasTableOfContent && this.$page.markdownPage.onThisPage == true">
				<OnThisPage />
			</div>

			<div
				class="markdownContent"
				:class="{
					allowTableOfContent: this.$page.markdownPage.onThisPage == true,
					onlyContent: this.$page.markdownPage.onThisPage == false && this.$page.markdownPage.sidebar == '',
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
				<template v-else-if="this.$page.markdownPage.title == 'Help Center'"></template>
				<div v-else class="contentHeader">
					<h1>{{ $page.markdownPage.title }}</h1>
				</div>

				<VueRemarkContent class="content" id="Markdown" />

				<div v-if="isEditable" class="editThisPage">
					<EditThisPage />
				</div>

				<div v-if="hasPrevNextPage" class="prevNextPage">
					<NextPrevLinks />
				</div>
			</div>
		</div>
	</Layout>
</template>

<static-query>
	query {
		metadata {
			settings {
				themeColor
			}
		}
	}
</static-query>

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
			help {
				title
				description
				link
				linkExt
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
		const image = process.env.SITE_URL + this.$page.markdownPage.metaImage || process.env.SITE_URL + "/ogimage.png";
		const imageType = this.$page.markdownPage.metaImageType || "summary";
		const color = this.$page.markdownPage.metaColor || this.$static.metadata.settings.themeColor;

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
					content: imageType,
				},
			],
		};
	},
	methods: {
		isEditable() {
			return this.$page.markdownPage.cms && this.$page.markdownPage.cms.edit;
		},

		hasTableOfContent() {
			return this.$page.markdownPage.onThisPage == true;
		},
		hasPrevNextPage() {
			return this.$page.markdownPage.prev || this.$page.markdownPage.next;
		},
	},
};
</script>

<style lang="stylus">
#MarkdownPage {
	display flex
	flex-wrap wrap
	align-items flex-start
	justify-content flex-start
}

.markdownContent {
	order 1

	&.allowTableOfContent {
		@media (min-width 768px) {
			width 66.666667%
		}
	}

	&.onlyContent {
		@media (min-width 1024px) {
			padding-left 14rem
			padding-right 14rem
		}
	}



	ol,
	ul {
		list-style revert
		margin revert
		padding revert
	}

	img {
		border-radius 8px
	}

	a {
		color var(--primary)

		&:hover {
			color var(--primary-dark)
		}
	}

	h2,
	h3 {
		padding-top 6rem
		margin-top -5rem
	}

	h2 {
		&:before {
			content ' '
			display block
			margin-bottom 1.5rem
			border-top 1px solid var(--border)
		}
	}

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

	.editThisPage {
		padding-top 1rem
		margin-top 0.5rem
	}

	.prevNextPage {
		padding-top 2rem
		margin-top 1.5rem
		border-top-width 1px
		border-color var(--border)
	}
}

.toc {
	position sticky
	order 2
	width 100%
	top 4rem

	@media (min-width 640px) {
		padding-left 1rem
	}

	@media (min-width 768px) {
		width 33%
		padding-left 1.5rem
	}

	@media (min-width 1024px) {
		padding-left 2rem
	}
}
</style>
