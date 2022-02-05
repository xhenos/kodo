import { Octokit } from "@octokit/core";

export default class API {
  constructor() {
    let cache = undefined;
    let job = undefined;

    this.fetchExtensions = async function () {
      if (cache != undefined) {
        return cache;
      }
      const octokit = new Octokit();
      if (job == undefined) {
        job = octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
          owner: "tachiyomiorg",
          repo: "tachiyomi-extensions",
          path: "index.min.json",
          ref: "repo",
        });
      }
      const response = await job;
      const raw = atob(response.data.content, "base64").toString();
      const data = JSON.parse(raw);
      const grouped = data.reduce((previousValue, currentValue) => {
        (previousValue[currentValue["lang"]] =
          previousValue[currentValue["lang"]] || []).push(
          processEntry(currentValue)
        );
        return previousValue;
      }, {});

      return (cache = cache || {
        languages: Object.keys(grouped),
        extensions: grouped,
      });
    };

    this.getLanguages = async function () {
      return (await this.fetchExtensions()).languages;
    };

    this.getExtensions = async function (query, languages, nsfw, sort) {
      let data = (await this.fetchExtensions()).extensions;
      let extensions = {};
      Object.assign(extensions, data);
      console.log(cache, query, languages);
      if (languages.length > 0) {
        Object.keys(extensions).forEach((value) => {
          if (!languages.includes(value)) {
            delete extensions[value];
          }
        });
      }

      if (query) {
        Object.keys(extensions).forEach((value) => {
          extensions[value] = extensions[value].filter((value) => {
            return value.name.toLowerCase().includes(query.toLowerCase());
          });
        });
      }

      if (nsfw !== "meh") {
        Object.keys(extensions).forEach((value) => {
          extensions[value] = extensions[value].filter((value) => {
            return (
              (nsfw === "yes" && value.nsfw) || (nsfw === "no" && !value.nsfw)
            );
          });
        });
      }

      if (sort === "desc") {
        Object.keys(extensions).forEach((value) => {
          extensions[value] = extensions[value].reverse();
        });
      }

      return extensions;
    };

    const processEntry = function (value) {
      return {
        id: value.pkg.replace("eu.kanade.tachiyomi.extension.", ""),
        pkg: value.pkg,
        lang: value.lang,
        code: value.code,
        version: `v${value.version}`,
        nsfw: value.nsfw === 1,
        hasReadme: value.hasReadme === 1,
        hasChangelog: value.hasChangelog === 1,
        name: value.name.split(": ")[1],
        iconUrl: `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${value.apk.substring(
          0,
          value.apk.lastIndexOf(".")
        )}.png`,
        downloadUrl: `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${value.apk}`,
        sources: value.sources,
      };
    };
  }
}
