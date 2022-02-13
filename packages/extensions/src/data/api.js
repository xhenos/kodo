import { Octokit } from "@octokit/core";

export default class ExtensionAPI {
  octokit = new Octokit();

  job = undefined;

  createOrGet() {
    if (this.job !== undefined) {
      return this.job;
    }

    this.job = this.octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: "tachiyomiorg",
        repo: "tachiyomi-extensions",
        path: "index.min.json",
        ref: "repo",
      }
    );
    return this.job;
  }

  async fetch() {
    let response = await this.createOrGet();
    const content = atob(response.data.content, "base64").toString();
    const json = JSON.parse(content);
    const data = json.reduce((previousValue, currentValue) => {
      (previousValue[currentValue["lang"]] =
        previousValue[currentValue["lang"]] || []).push(
        processEntry(currentValue)
      );
      return previousValue;
    }, {});
    return data;
  }
}

function processEntry(value) {
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
}
