<template>
	<ClientOnly>
		<carousel :perPage="1">
			<slide v-for="item in items" :key="item">
				<img class="slide-image" v-bind:src="item.image" />
				<p class="slide-title">
					<b v-if="item.title">{{ item.title }}</b>
				</p>
				<p class="slide-desc" v-if="item.desc">{{ item.desc }}</p>
			</slide>
		</carousel>
	</ClientOnly>
</template>

<script>
export default {
	props: {
		items: Array,
	},
	components: {
		Carousel: () =>
			import("vue-carousel")
				.then(m => m.Carousel)
				.catch(),
		Slide: () =>
			import("vue-carousel")
				.then(m => m.Slide)
				.catch(),
	},
};
</script>

<style>
.slide-image {
	margin: auto;
}

.slide-title,
.slide-desc {
	text-align: center;
}
</style>
