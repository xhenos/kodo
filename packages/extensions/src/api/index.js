import { Octokit } from "@octokit/core";
import { extensions, updatedAt } from "../util/stores";

let cache
let cachedAt

extensions.subscribe(value => {
  cache = value
})

updatedAt.subscribe(value => {
  cachedAt = value
})

export default class API {
  constructor() {
    let job = undefined;

    this.fetchExtensions = async function () {
      const now = new Date().getTime()
      if (cache != undefined && cachedAt + 1000 * 60 * 60 > now) {
        console.log("Returning cache", cache)
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

      const newData = {
        languages: Object.keys(grouped),
        extensions: grouped,
      }

      extensions.set(newData)
      updatedAt.set(new Date().getTime())

      console.log("Freshly backed", newData)
      return newData;
    };

    this.getLanguages = async function () {
      return (await this.fetchExtensions()).languages;
    };

    this.getExtensions = async function (query, languages, nsfw, sort) {
      let data = (await this.fetchExtensions()).extensions;
      let extensions = {};
      Object.assign(extensions, data);
      if (languages.length > 0) {
        Object.keys(extensions).forEach((value) => {
          if (!languages.includes(value)) {
            delete extensions[value];
          }
        });
      }


      for (const value of Object.keys(extensions)) {
        if (languages.length > 0 && !languages.includes(value)) {
          delete extensions[value]
          continue
        }

        if (query) {
          extensions[value] = extensions[value].filter((value) => {
            if (/^\d+/.test(query)) {
              return value.sources.some((source) => source.id.includes(query))
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
