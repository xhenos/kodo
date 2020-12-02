<template>
	<button class="downloadButton" v-bind:class="{ alternative: isAlternative}">
		<p>{{ title }}</p>
		<p>{{ data.version }}</p>
	</button>
</template>

<script>
export default {
	props: {
		title: String,
		isAlternative: Boolean,
		data: Object
	}
};
</script>

<style>
.downloadButton {
	background: royalblue;
	padding: 5px 50px;
	margin: 5px;
	border-radius: 5px;
}

.alternative {
	background: cornflowerblue;
}

.downloadButton p {
	margin: 0px;
}
</style>