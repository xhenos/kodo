import { extensions, updatedAt } from "../util/stores";
import { sortLanguages } from "../util/language";

let cache;
let cachedAt;

extensions.subscribe((value) => {
  cache = value;
});

updatedAt.subscribe((value) => {
  cachedAt = value;
});

export default class ExtensionStore {
  isValid() {
    const now = new Date().getTime();
    return cache !== undefined && cachedAt + 1000 * 60 * 60 > now;
  }

  fetch() {
    return cache;
  }

  fetchLangauges() {
    let languages = cache.languages;
    languages.sort(sortLanguages);
    return languages;
  }

  save(data) {
    const toSave = {
      languages: Object.keys(data),
      extensions: data,
    };
    extensions.set(toSave);
    updatedAt.set(new Date().getTime());
    return toSave;
  }
}
