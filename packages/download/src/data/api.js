import { Octokit } from "@octokit/core";

const octokit = new Octokit();

let job = undefined;

export default class ReleaseAPI {

    fetchLatest() {
        if (job !== undefined) {
            return job
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
        return job
    }
}
