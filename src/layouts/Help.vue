<template>
	<div>
		<h3>Need help? We've got your back.</h3>
		<p>
			From common questions to guides, find help for everything Tachiyomi.
		</p>
		<input type="text" placeholder="Search.." />
		<br />
		<br />
		<div v-if="this.$page.markdownPage.help" class="row help">
			<div v-for="(helpItem, index) in this.$page.markdownPage.help" :key="index" class="column helpItem">
				<a v-if="helpItem.link" :href="helpItem.link" tabindex="1">
					<div class="card" :class="'card__' + helpItem.title">
						<header v-if="helpItem.title == 'FAQ'">
							<MaterialIcon icon="question_answer" icononly />
							<h3>{{ helpItem.title }}</h3>
						</header>
						<header v-else-if="helpItem.title == 'Troubleshooting'">
							<MaterialIcon icon="assistant_photo" icononly />
							<h3>{{ helpItem.title }}</h3>
						</header>
						<header v-else-if="helpItem.title == 'Guides'">
							<MaterialIcon icon="format_list_numbered" icononly />
							<h3>{{ helpItem.title }}</h3>
						</header>
						<header v-else-if="helpItem.title == 'Forks'">
							<MaterialIcon icon="call_split" icononly />
							<h3>{{ helpItem.title }}</h3>
						</header>
						<header v-else-if="helpItem.title == 'Contribution'">
							<MaterialIcon icon="child_care" icononly />
							<h3>{{ helpItem.title }}</h3>
						</header>
						<p>{{ helpItem.description }}</p>
					</div>
				</a>
				<a v-else-if="helpItem.linkExt" :href="helpItem.linkExt" target="_blank" rel="noreferrer" tabindex="1">
					<div class="card" :class="'card__' + helpItem.title">
						<header v-if="helpItem.title == 'GitHub'">
							<MaterialIcon icon="blur_circular" icononly />
							<span>
								<h3>{{ helpItem.title }}</h3>
								<OutboundLink />
							</span>
						</header>
						<header v-else-if="helpItem.title == 'Discord'">
							<MaterialIcon icon="blur_circular" icononly />
							<span>
								<h3>{{ helpItem.title }}</h3>
								<OutboundLink />
							</span>
						</header>
						<header v-else-if="helpItem.title == 'Reddit'">
							<MaterialIcon icon="blur_circular" icononly />
							<span>
								<h3>{{ helpItem.title }}</h3>
								<OutboundLink />
							</span>
						</header>
						<header v-else-if="helpItem.title == 'Twitter'">
							<MaterialIcon icon="blur_circular" icononly />
							<span>
								<h3>{{ helpItem.title }}</h3>
								<OutboundLink />
							</span>
						</header>
						<header v-else-if="helpItem.title == 'Facebook'">
							<MaterialIcon icon="blur_circular" icononly />
							<span>
								<h3>{{ helpItem.title }}</h3>
								<OutboundLink />
							</span>
						</header>
						<p>{{ helpItem.description }}</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="stylus">
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

	header {
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

			&.discord-icon {
				color $discordAccentColor
			}

			&.reddit-icon {
				color $redditAccentColor
			}

			&.github-icon {
				color $githubAccentColor
			}
		}

		.icon.outbound {
			visibility visible
		}
	}

	&__Discord:hover {
		border-bottom 2px solid $discordAccentColor

		h3 {
			color $discordAccentColor
		}
	}

	&__Reddit:hover {
		border-bottom 2px solid $redditAccentColor

		h3 {
			color $redditAccentColor
		}
	}

	&__GitHub:hover {
		border-bottom 2px solid $githubAccentColor

		h3 {
			color $githubAccentColor
		}
	}
}

@media screen and (max-width $MQMobile) {
	.column {
		margin 0.4rem 0.6rem
	}

	.card {
		height auto
		width auto

		header {
			margin-top 1rem

			.material-icons,
			.material-design-icon {
				font-size 1.6em

				&.discord-icon {
					color $discordAccentColor
				}

				&.reddit-icon {
					color $redditAccentColor
				}

				&.github-icon {
					color $githubAccentColor
				}
			}

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

		&__Discord {
			h3 {
				color $discordAccentColor
			}
		}

		&__Reddit {
			h3 {
				color $redditAccentColor
			}
		}

		&__GitHub {
			h3 {
				color $githubAccentColor
			}
		}
	}

	.row {
		grid-template-columns repeat(1, 1fr)
	}
}
</style>
