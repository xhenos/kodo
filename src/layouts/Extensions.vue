<template>
	<div>
		<h1>Extensions</h1>

		<tabs>
			<tab name="Available extensions" :selected="true">
				<p>
					Here is a list of all available extensions to download inside the app.
					<!-- <ExtensionList /> -->
				</p>
			</tab>
			<tab name="Spreadsheet">
				<p>
					Spreadsheet to help you find sources bundled in multi-source extensions, courtesy of
					[SnakeDoc83](https://github.com/snakedoc83). Now maintained by [Riztard](https://github.com/Riztard)
					and other volunteers.
					<!-- <SourceSheet /> -->
				</p>
			</tab>
		</tabs>
	</div>
</template>

<script>
import Tabs from "~/components/Tabs.vue";
import Tab from "~/components/Tab.vue";

export default {
	components: {
		Tabs,
		Tab,
	},
};
</script>

<style></style>
