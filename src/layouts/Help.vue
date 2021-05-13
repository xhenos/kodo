<template>
	<div>
		<div class="intro">
			<span class="h1">Help Center</span>
			<span class="h3">Need help? We've got your back.</span>
			<span>From common questions to guides, find help for everything!</span>
		</div>
		<div v-if="this.$page.markdownPage.help" class="row help">
			<div v-for="(helpItem, index) in this.$page.markdownPage.help" :key="index" class="column helpItem">
				<a v-if="helpItem.link" :href="helpItem.link" tabindex="1">
					<div class="card" :class="'card__' + helpItem.title">
						<div class="header" v-if="helpItem.title == 'FAQ'">
							<MaterialIcon icon="question_answer" iconOnly />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Troubleshooting'">
							<MaterialIcon icon="assistant_photo" iconOnly />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Guides'">
							<MaterialIcon icon="format_list_numbered" iconOnly />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Forks'">
							<MaterialIcon icon="call_split" iconOnly />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Contribution'">
							<MaterialIcon icon="groups" iconOnly />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<p>{{ helpItem.description }}</p>
					</div>
				</a>
				<a v-else-if="helpItem.linkExt" :href="helpItem.linkExt" target="_blank" rel="noreferrer" tabindex="1">
					<div class="card" :class="'card__' + helpItem.title">
						<div class="header" v-if="helpItem.title == 'GitHub'">
							<github-logo height="2.5em" width="2.5em" />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Discord'">
							<discord-logo height="2.5em" width="2.5em" />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Reddit'">
							<reddit-logo height="2.5em" width="2.5em" />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Twitter'">
							<twitter-logo height="2.5em" width="2.5em" />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<div class="header" v-else-if="helpItem.title == 'Facebook'">
							<facebook-logo height="2.5em" width="2.5em" />
							<h3>{{ helpItem.title }}</h3>
						</div>
						<p>{{ helpItem.description }}</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import GithubLogo from "@/assets/images/github-logo.svg";
import DiscordLogo from "@/assets/images/discord-logo.svg";
import RedditLogo from "@/assets/images/reddit-logo.svg";
import TwitterLogo from "@/assets/images/twitter-logo.svg";
import FacebookLogo from "@/assets/images/facebook-logo.svg";

export default {
	components: {
		GithubLogo,
		DiscordLogo,
		RedditLogo,
		TwitterLogo,
		FacebookLogo,
	},
};
</script>

<style lang="stylus">
.intro {
	text-align center

	.h1,
	.h3 {
		line-height 1.375
		font-weight 600
		margin-bottom 1rem
		color var(--header)
	}

	.h1 {
		font-size 2.25rem
		margin-top 4rem
	}

	.h3 {
		font-size 1.25rem
	}

	span {
		display block
		margin-bottom 1rem

		&:last-child {
			margin-bottom 4rem
		}
	}
}

.row {
	display grid
	grid-template-columns repeat(5, 1fr)
	grid-gap 1rem

	&:after {
		content ""
		display table
		clear both
	}
}

.column {
	border 1px solid var(--border)
	border-radius 6px

	&:hover {
		border-bottom none
	}

	a:focus {
		box-shadow none
		outline none

		.card {
			outline none

			:root [data-theme=light] & {
				box-shadow 0 0 30px #b1aeae52, 0 0 0 2px var(--primary)
			}

			:root [data-theme=dark] & {
				box-shadow 0 0 30px #0e1421e3, 0 0 0 2px var(--primary)
			}
		}
	}
}

.card {
	background-color var(--container)
	border-bottom 1px solid transparent
	border-radius 6px
	color var(--primary)
	height 100%
	overflow hidden
	padding 0.5rem
	text-align center
	user-select none
	width auto

	:root [data-theme=light] & {
		box-shadow 0 0 30px #b1aeae52
	}

	:root [data-theme=dark] & {
		box-shadow 0 0 30px #0e1421e3
	}

	.header {
		background-color transparent !important
		border none
		margin-top 1.25rem
		white-space nowrap

		.material-icons,
		.material-design-icon {
			display contents
			font-size 2.5em
			color $accentColorSecondary
		}

		svg {
			display inline
		}

		.material-design-icon > .material-design-icon__svg {
			position relative
		}

		span {
			display block

			.icon.outbound {
				display inline-block
				visibility hidden
				vertical-align baseline
				right 10px
			}

			h3 {
				display inline-block
				margin-bottom 0
			}
		}

		h3 {
			margin 10px
			padding-top unset
		}
	}

	p {
		color #566573
		font-weight 400
		font-size 0.95rem
	}

	&:hover {
		border-bottom 2px solid var(--primary)
		border-bottom-left-radius 0
		border-bottom-right-radius 0
		position relative

		.material-design-icon {
			color var(--primary)
		}

		.icon.outbound {
			visibility visible
		}
	}

	&__GitHub:hover {
		:root [data-theme=light] & {
			$github-accent = #424242
			border-bottom 2px solid $github-accent

			h3,
			svg {
				color $github-accent
			}
		}

		:root [data-theme=dark] & {
			$github-accent = #cccccc
			border-bottom 2px solid $github-accent

			h3,
			svg {
				color $github-accent
			}
		}
	}

	&__Discord:hover {
		$discord-accent = #5865f2
		border-bottom 2px solid $discord-accent

		h3,
		svg {
			color $discord-accent
		}
	}

	&__Reddit:hover {
		$reddit-accent = #ff4500
		border-bottom 2px solid $reddit-accent

		h3,
		svg {
			color $reddit-accent
		}
	}

	&__Twitter:hover {
		$twitter-accent = #00acee
		border-bottom 2px solid $twitter-accent

		h3,
		svg {
			color $twitter-accent
		}
	}

	&__Facebook:hover {
		:root [data-theme=light] & {
			$facebook-accent = #4a78d8
			border-bottom 2px solid $facebook-accent

			h3,
			svg {
				color $facebook-accent
			}
		}

		:root [data-theme=dark] & {
			$facebook-accent = #4a78d8
			border-bottom 2px solid $facebook-accent

			h3,
			svg {
				color $facebook-accent
			}
		}
	}
}

@media screen and (max-width 1380px) {
	.column {
		margin 0.4rem 0.6rem
	}

	.card {
		height auto
		width auto

		.header {
			margin-top 1rem

			span {
				display inline-block

				.icon.outbound {
					visibility visible
					right 0
					top -4px
				}

				h3 {
					margin-left 0
					margin-bottom 0
				}
			}

			h3 {
				font-size 1.5rem
				display inline-block
				margin 0
			}
		}

		p {
			font-size 1rem
		}

		&:hover {
			border-bottom 2px solid #cfd4db
			border-bottom-left-radius 6px
			border-bottom-right-radius 6px
			position inherit
			top unset

			.material-design-icon {
				color var(--primary-dark)
			}
		}
	}

	.row {
		grid-template-columns repeat(2, 1fr)
	}
}

@media screen and (max-width 767px) {
	.row {
		grid-template-columns repeat(1, 1fr)
	}
}
</style>
