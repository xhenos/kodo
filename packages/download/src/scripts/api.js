import { Octokit } from "@octokit/core";

export default function API() {

    const octokit = new Octokit()

    let cache = undefined
    let job = undefined

    this.fetchLatest = async function () {
        if (cache !== undefined) {
            return cache
        }
        if (job === undefined) {
            job = Promise.all([
                octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
                    owner: 'tachiyomiorg',
                    repo: 'tachiyomi',
                }),
                octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
                    owner: 'tachiyomiorg',
                    repo: 'tachiyomi-preview',
                })
            ])
        }
        const result = await job
        cache = result
        job = undefined
        return result
    }

}