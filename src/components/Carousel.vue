<template>
	<ClientOnly>
		<VueCarousel :items="items" />
	</ClientOnly>
</template>

<script>
import VueCarousel from "./VueCarousel";
export default {
	components: { VueCarousel },
	props: {
		items: Array,
	},
};
</script>
