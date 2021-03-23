<template>
	<div class="buttons">
		<div class="buttons-container">
			<slot></slot>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.buttons {
	text-align center
	margin-top 0.5rem

	.buttons-container {
		display grid
		grid-template-columns minmax(0, 1fr)
		grid-template-rows min-content 1fr
		gap 0.5rem 0.5rem
		grid-template-areas 'First' 'Second' 'Third'

		@media (min-width 640px) {
			grid-template-columns 1fr minmax(0px, 1fr)
			grid-template-rows min-content 1fr
			grid-template-areas 'First Second' 'Third Third'
		}

		& > .download-button {
			margin 0.25rem
		}

		.download-button {
			&:hover {
				cursor pointer
			}

			&:nth-child(1) {
				grid-area First
				margin-left auto
			}

			&:nth-child(2) {
				grid-area Second
				margin-right auto
			}

			&:nth-child(3) {
				grid-area Third
			}
		}
	}
}
</style>
