import CMS from "netlify-cms";

CMS.registerPreviewStyle("/cms/assets/style.css");
CMS.registerPreviewStyle("/cms/assets/container.css");

CMS.registerEditorComponent({
	id: "container",
	label: "Container",
	fields: [
		{
			name: "type",
			label: "Type",
			widget: "select",
			required: "true",
			options: [
				{ label: "Guide", value: "guide" },
				{ label: "Tip", value: "c-tip" },
				{ label: "Warning", value: "c-warning" },
				{ label: "Danger", value: "c-danger" },
				{ label: "Alert", value: "alert" },
				{ label: "Note", value: "note" },
				{ label: "Videolink", value: "videolink" },
				{ label: "Collapse", value: "collapse" },
			],
		},
		{ name: "title", label: "Title", widget: "string", required: "false" },
		{ name: "description", label: "Description", widget: "string", required: "true" },
	],
	pattern: /^\s?:::(guide|alert|c-tip|c-warning|c-danger|note|videolink|collapse)(.+)?\s+?(.+)\s+:::$/,
	fromBlock: function(match) {
		return {
			type: match[1],
			title: match[2],
			titleFallback: match[2] || "",
			description: match[3],
		};
	},
	toBlock: function(obj) {
		return `:::${obj.type} ${obj.title}\n${obj.description}\n:::`;
	},
	toPreview: function(obj) {
		if (obj.type.startsWith("c-")) {
			return `<div class="custom-block ${obj.type}"><p class="c-title">${obj.titleFallback}</p><p>${obj.description}</p></div>`;
		} else if (obj.type == "videolink") {
			return `<div class="videolink"><p><a href="${obj.description}"></a></p></div>`;
		} else if (obj.type == "collapse") {
			return `<details class="custom-block c-details"><summary class="c-title">${obj.titleFallback}</summary><p>${obj.description}</p></details>`;
		} else {
			return `<div class="custom-block c-${obj.type}"><p class="c-title">${obj.titleFallback}</p><p>${obj.description}</p></div>`;
		};
	},
});
