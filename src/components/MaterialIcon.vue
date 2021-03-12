<template>
	<i v-if="iconOnly" :class="name" class="material-icons">{{ icon }}</i>
	<span v-else :class="name" class="material-holder">
		<i class="material-icons select-none">{{ icon }}</i>
	</span>
</template>

<script>

/**
 * For material icon references use https://material.io/resources/icons/
 * Code example: <MaterialIcon icon="android" />
 */
export default {
	props: {
		iconOnly: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			default: "",
		},
		icon: {
			type: String,
			default: "",
		},
	},
};
</script>

<style lang="stylus">
@import "~material-design-icons/iconfont/material-icons.css";

.material-holder {
	margin 0
	font-size 0.85em
	border-radius 3px
}

.material-icons {
	font-size 1.35em
	position relative
	top 0.2rem
}
</style>
