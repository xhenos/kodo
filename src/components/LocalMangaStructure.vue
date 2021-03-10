<template>
	<div v-if="folder" class="side-by-side">
		<ul class="file-tree">
			<li>
				/sdcard/Tachiyomi/local
				<ul>
					<li>
						<span class="ft-icon ft-folder">Manga title</span>
						<ul>
							<li>
								<span class="ft-icon ft-folder">ch1</span>
								<ul>
									<span class="ft-icon ft-image">images</span>
								</ul>
							</li>
							<li>
								<span class="ft-icon ft-folder">ch2</span>
								<ul>
									<span class="ft-icon ft-image">images</span>
								</ul>
							</li>
							<span class="ft-icon ft-image">cover.jpg</span>
						</ul>
					</li>
					<li>...</li>
				</ul>
			</li>
		</ul>
		<ul class="file-tree">
			<li>
				/storage/18F5-2C11/Tachiyomi/local
				<ul>
					<li>
						<span class="ft-icon ft-folder">Manga title</span>
						<ul>
							<li>
								<span class="ft-icon ft-folder">ch3</span>
								<ul>
									<span class="ft-icon ft-image">images</span>
								</ul>
							</li>
							<li>
								<span class="ft-icon ft-folder">ch4</span>
								<ul>
									<span class="ft-icon ft-image">images</span>
								</ul>
							</li>
						</ul>
					</li>
					<li>...</li>
				</ul>
			</li>
		</ul>
	</div>
	<div v-else-if="zip">
		<ul class="file-tree">
			<li>
				/sdcard/Tachiyomi/local
				<ul>
					<li>
						<span class="ft-icon ft-folder">Manga title</span>
						<ul>
							<li>
								<span class="ft-icon ft-zip">ch1.zip</span>
								<ul>
									<span class="ft-icon ft-image">images</span>
								</ul>
							</li>
							<li>
								<span class="ft-icon ft-zip">ch2.zip</span>
								<ul>
									<li>
										<span class="ft-icon ft-folder">ch2</span>
										<ul>
											<span class="ft-icon ft-image">images</span>
										</ul>
									</li>
								</ul>
							</li>
							<span class="ft-icon ft-image">cover.jpg</span>
						</ul>
					</li>
					<li>...</li>
				</ul>
			</li>
		</ul>
	</div>
	<span v-else class="missingProps" title="Check the VersionTag.vue file for code example.">
		You need to specify props.
	</span>
</template>

<script>
/**
 * Code example: <LocalMangaStructure folder />
 */
export default {
	props: {
		folder: {
			type: Boolean,
			default: false,
		},
		zip: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="stylus" scoped>
.file-tree {
	font-size 0.85rem
	list-style none !important
	padding 0

	li,
	ul {
		position relative
	}

	li {
		margin 0
		padding-left 1rem
		margin-bottom 0 !important

		&::before,
		&::after {
			content ""
			left 0
			position absolute
		}

		&::before {
			border-top 1px solid #3d5670
			height 0
			top 0.7em
			width 0.8em
		}

		&:last-child::after {
			height 0.7em
		}

		&::after {
			border-left 1px solid #3d5670
			height 100%
			top 0
			width 0
		}
	}

	ul {
		list-style none !important
		margin-left 1em
		margin-bottom 0
		padding 0
	}

	& > li:first-child::before,
	& > li:first-child::after {
		content none
	}

	.ft-icon {
		position relative
		display inline-block
		vertical-align top
		padding 0 0 0 1.5em

		&:before {
			content ""
			position absolute
			top 0
			left 0.25em
			height 100%
			width 1em
			background no-repeat 50% 50% / contain
		}

		&.ft- {
			&folder {
				&:before {
					background-image url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M4 5v14h16V7h-8.414l-2-2H4zm8.414 0H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2z' fill='rgba(71,101,130,1)'/%3E%3C/svg%3E")
				}
			}

			&image {
				opacity 0.75

				&:before {
					background-image url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 110-4 2 2 0 010 4z' fill='rgba(71,101,130,1)'/%3E%3C/svg%3E")
				}
			}

			&zip {
				&:before {
					background-image url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zm-5-8v5h-4v-3h2v-2h2zm-2-8h2v2h-2V4zm-2 2h2v2h-2V6zm2 2h2v2h-2V8zm-2 2h2v2h-2v-2z' fill='rgba(71,101,130,1)'/%3E%3C/svg%3E")
				}
			}
		}
	}
}

.side-by-side {
	align-content middle
	display flex
	justify-content center

	& > * {
		width 50%
	}

	& > * + * {
		border-left 1px solid #aaaaaa
	}

	@media (max-width $MQMobile) {
		flex-direction column

		& > * {
			width 100%
		}

		& > * + * {
			border-left none
			border-top 1px solid #aaaaaa
			margin-top 0
			padding-top 1em
		}
	}
}
</style>
