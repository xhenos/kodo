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
			required: true,
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
		{ name: "title", label: "Title", widget: "string", required: false },
		{
			name: "body",
			label: "Body",
			widget: "markdown",
			required: true,
			buttons: ["bold", "italic", "code", "link"],
			editor_components: ["code-block"],
			minimal: true,
		},
	],
	pattern: /^\s?:::(guide|alert|c-tip|c-warning|c-danger|note|videolink|collapse)(.+)?\s+?(.+)\s+:::$/,
	fromBlock: function(match) {
		return {
			type: match[1],
			title: match[2],
			titleFallback: match[2] || "",
			body: match[3],
		};
	},
	toBlock: function(obj) {
		return `:::${obj.type} ${obj.title}\n${obj.body}\n:::`;
	},
	toPreview: function(obj) {
		if (obj.type.startsWith("c-")) {
			return `<div class="custom-block ${obj.type}"><p class="c-title">${obj.titleFallback}</p><p>${obj.body}</p></div>`;
		} else if (obj.type == "videolink") {
			return `<div class="videolink"><p><a href="${obj.body}"></a></p></div>`;
		} else if (obj.type == "collapse") {
			return `<details class="custom-block c-details"><summary class="c-title">${obj.titleFallback}</summary><p>${obj.body}</p></details>`;
		} else {
			return `<div class="custom-block c-${obj.type}"><p class="c-title">${obj.titleFallback}</p><p>${obj.body}</p></div>`;
		};
	},
});
