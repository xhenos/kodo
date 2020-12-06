<template>
	<div class="py-2 border-t-2 border-ui-primary">
		<div class="container">
			<div class="flex items-center justify-between -mx-2 sm:-mx-4">
				<div class="flex flex-col items-center px-2 mr-auto sm:px-4 sm:flex-row">
					<g-link to="/" class="flex items-center nav-link nav-primary hover:text-ui-primary" title="Home">
						<Logo :width="32" class="text-ui-primary" />
						<span class="hidden ml-2 text-xl font-semibold md:block">
							{{ meta.siteName }}
						</span>
					</g-link>

					<div v-if="settings.nav.links.length > 0" class="hidden ml-2 mr-5 sm:block sm:ml-8">
						<g-link
							v-for="link in settings.nav.links"
							:key="link.path"
							:to="link.path"
							class="block p-1 font-medium nav-link nav-secondary text-ui-typo hover:text-ui-primary"
						>
							{{ link.title }}
						</g-link>
					</div>
				</div>

				<div class="w-full px-2 sm:px-4 max-w-screen-xs">
					<ClientOnly>
						<Search />
					</ClientOnly>
				</div>

				<div class="flex items-center justify-end px-2 sm:px-4">
					<ToggleDarkMode class="ml-0 sm:ml-4">
						<template slot="default" slot-scope="{ dark }">
							<MoonIcon v-if="dark" size="22" />
							<SunIcon v-else size="22" />
						</template>
					</ToggleDarkMode>

					<a
						v-if="settings.twitter"
						:href="settings.twitter"
						class="hidden ml-4 sm:block"
						target="_blank"
						rel="noopener noreferrer"
						title="Twitter"
						name="Twitter"
					>
						<twitter-logo height="20px" width="20px" />
					</a>

					<a
						v-if="settings.discord"
						:href="settings.discord"
						class="hidden ml-4 sm:block"
						target="_blank"
						rel="noopener noreferrer"
						title="Discord"
						name="Discord"
					>
						<discord-logo height="24px" width="24px" />
					</a>

					<a
						v-if="settings.github"
						:href="settings.github"
						class="ml-4"
						target="_blank"
						rel="noopener noreferrer"
						title="Github"
						name="Github"
					>
						<github-logo height="20px" width="20px" />
					</a>

					<g-link
						to="/download/"
						class="md:hidden ml-4 md:block text-xl font-medium nav-link text-ui-typo hover:text-ui-primary"
					>
						<DownloadIcon size="22" />
					</g-link>

					<g-link
						to="/download/"
						class="hidden ml-4 md:block p-1 text-lg font-fancy font-medium nav-link text-ui-typo hover:text-ui-primary"
					>
						{{ stable.version }}
					</g-link>
				</div>
			</div>
		</div>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
      twitter
	  discord
      nav {
        links {
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import Logo from "@/components/Logo.vue";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import { SunIcon, MoonIcon, DownloadIcon } from "vue-feather-icons";
import GithubLogo from "@/assets/images/github-logo.svg";
import TwitterLogo from "@/assets/images/twitter-logo.svg";
import DiscordLogo from "@/assets/images/discord-logo.svg";

const Search = () => import(/* webpackChunkName: "search" */ "@/components/Search").catch(error => console.warn(error));

export default {
	components: {
		Logo,
		Search,
		ToggleDarkMode,
		SunIcon,
		MoonIcon,
		DownloadIcon,
		GithubLogo,
		TwitterLogo,
		DiscordLogo,
	},
	data: function () {
		return {
			stable: {
				version: "v0.00.0",
			},
		};
	},
	created: async function () {
		let stable = await this.$fetchers.tachiyomi.stable(this.$store)
		this.stable = stable.data;
	},
	computed: {
		meta() {
			return this.$static.metadata;
		},
		settings() {
			return this.meta.settings;
		},
	},
};
</script>

<style lang="scss">
header {
	svg:not(.feather-search) {
		&:hover {
			@apply text-ui-primary;
		}
	}
}

.nav-link {
	&.active {
		@apply text-ui-primary border-ui-primary;
	}
}

.nav-link {
	&.nav-primary {
		&.active:not(.active--exact) {
			color: var(--color-ui-typo);
			&:hover {
				color: var(--color-ui-primary);
			}
		}
	}
}
</style>
