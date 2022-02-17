import { Octokit } from "@octokit/core";

const octokit = new Octokit();

let job = undefined;

function extractDownloadUrls(object, preview) {
  if (object === undefined)
    return {
      universal: "",
      other: [],
    };
  const {
    data: { assets },
  } = object;
  const index = assets.findIndex((element) => {
    const regex = preview
      ? /^tachiyomi-r\d{4,}.apk/
      : /^tachiyomi-v\d+\.\d+\.\d+.apk/;
    return regex.test(element.name);
  });
  return {
    universal: assets.splice(index, 1)[0].browser_download_url,
    other: assets.map((element) => element.browser_download_url).sort()
  };
}

function processEntry(value) {
  return {
    version: value['data']['tag_name'].replace('v', ''),
    downloads: extractDownloadUrls(value, value['data']['tag_name'].includes('r')),
    publishedAt: new Date(value['data']['published_at']),
    body: value['data']['body']
  }
}

export default class ReleaseAPI {

  createOrGet() {
    if (job !== undefined) {
      return job;
    }
    job = Promise.all([
      octokit.request("GET /repos/{owner}/{repo}/releases/latest", {
        owner: "tachiyomiorg",
        repo: "tachiyomi",
      }),
      octokit.request("GET /repos/{owner}/{repo}/releases/latest", {
        owner: "tachiyomiorg",
        repo: "tachiyomi-preview",
      }),
    ]);
    return job;
  }

  async fetchLatest() {
    let response = await this.createOrGet()
    return response.map((value) => processEntry(value))
  }
}
