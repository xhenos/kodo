<template>
	<Layout>
		<div class="flex flex-wrap items-start justify-start">
			<div class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky" style="top: 4rem">
				<OnThisPage />
			</div>

			<div class="order-1 w-full md:w-2/3">
				<VueRemarkContent id="Markdown" />
				<div class="github-edit-link">
					<a :href="editLink" target="_blank" class="hover:text-ui-primary">
						<GithubLogo />
						<span>Edit this page on GitHub</span>
					</a>
				</div>

				<div class="mt-6 pt-8 border-t border-ui-border">
					<NextPrevLinks />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    content
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage{
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
import GithubLogo from "@/assets/images/github-logo.svg";

export default {
	components: {
		OnThisPage,
		NextPrevLinks,
		GithubLogo,
	},
	computed: {
		currentPath() {
			return this.$route.matched[0].path;
		},
		editLink() {
			let path = this.currentPath;
			if ((path.match(new RegExp("/", "g")) || []).length == 1) path = path + "/README";
			return `https://github.com/xhenos/website/blob/gridsome/content${path}.md`;
		},
	},

	metaInfo() {
		const title = this.$page.markdownPage.title;
		const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

		return {
			title: title,
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
@import "prism-themes/themes/prism-material-oceanic.css";

#Markdown {
	ul,
	ol {
		list-style: revert;
		padding: revert;
	}
}

.github-edit-link a {
	font-size: 0.9rem;
	font-weight: normal;
	display: inline-flex;
	align-items: center;
	padding-top: 1rem;

	svg {
		margin-right: 0.5rem;
	}
}
</style>
