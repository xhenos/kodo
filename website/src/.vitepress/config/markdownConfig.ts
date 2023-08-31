import type { MarkdownOptions } from "vitepress";

import { attrs } from "@mdit/plugin-attrs";
import { figure } from "@mdit/plugin-figure";
import { imgLazyload } from "@mdit/plugin-img-lazyload";
import { imgMark } from "@mdit/plugin-img-mark";
import { imgSize } from "@mdit/plugin-img-size";
import { include } from "@mdit/plugin-include";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const markdownConfig: MarkdownOptions = {
	config: (md) => {
		md.use(attrs),
			md.use(figure),
			md.use(imgLazyload),
			md.use(imgMark),
			md.use(imgSize),
			md.use(include, {
				currentPath: (env) => env.filePath,
			}),
			md.use(tabsMarkdownPlugin);
	},
};

export default markdownConfig;
