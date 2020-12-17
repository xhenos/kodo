<template>
	<div class=" content-center text-center my-8">
		<div class="buttons-container flex justify-center flex-col flex-wrap xxl:flex-row">
			<slot></slot>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.buttons-container {
	button {
		flex-grow 1
	}
	button:nth-child(3) {
		flex 1 0 100%
	}
}
</style>
