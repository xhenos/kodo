import ExtensionAPI from "./api";
import ExtensionStore from "./local";

const extensionApi = new ExtensionAPI();
const extensionStore = new ExtensionStore();

async function fetchExtensions() {
  if (extensionStore.isValid()) {
    return extensionStore.fetch();
  }

  const data = await extensionApi.fetch();

  return extensionStore.save(data);
}

export default class Repository {
  getLanguages() {
    return extensionStore.fetchLangauges();
  }

  async getExtensions(query, languages, nsfw, sort) {
    const allExtensions = (await fetchExtensions()).extensions;
    let extensions = {};
    Object.assign(extensions, allExtensions);

    for (const value of Object.keys(extensions)) {
      if (languages.length > 0 && !languages.includes(value)) {
        delete extensions[value];
        continue;
      }

      if (query) {
        extensions[value] = extensions[value].filter((value) => {
          if (/^\d+/.test(query)) {
            return value.sources.some((source) => source.id.includes(query));
          }
          return value.name.toLowerCase().includes(query.toLowerCase());
        });
      }

      if (nsfw !== "meh") {
        extensions[value] = extensions[value].filter((value) => {
          return (
            (nsfw === "yes" && value.nsfw) || (nsfw === "no" && !value.nsfw)
          );
        });
      }

      if (sort === "desc") {
        extensions[value] = extensions[value].reverse();
      }
    }

    return extensions;
  }
}
