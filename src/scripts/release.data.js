import axios from "axios"

class Default {
    constructor() {
        this.stableUrl = "";
        this.previewUrl = "";
    }

    async stable() {
        const { data } = await axios.get(this.stableUrl);

        const apkAsset = data.assets.find(a => a.name.includes(".apk"));

        return {
            body: data.body,
            version: data.tag_name.slice(1),
            downloadUrl: apkAsset.browser_download_url,
            releaseDate: data.published_at,
        };
    }

    async preview() {
        const { data } = await axios.get(this.previewUrl);

        const apkAsset = data.assets.find(a => a.name.includes(".apk"));

        return Promise.resolve({
            body: data.body,
            version: data.tag_name.slice(1),
            downloadUrl: apkAsset.browser_download_url,
            releaseDate: data.published_at,
        });
    };
}

class Tachiyomi extends Default {
    constructor() {
        super()
        this.stableUrl = "https://api.github.com/repos/inorichi/tachiyomi/releases/latest"
        this.previewUrl = "https://api.github.com/repos/tachiyomiorg/android-app-preview/releases/latest"
        this.JOB = {}
    }

    async stable(store) {
        const REPO = 'tachiyomi'
        const FLAVOUR = 'stable'
        if (this.JOB.hasOwnProperty(FLAVOUR)) {
            try {
                await this.JOB
            } catch (e) {
                throw new Error(e)
            }
        }
        if (store.getters.isFlavourUpdated({ _repo: REPO, _flavour: FLAVOUR })) {
            return store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR })
        }
        try {
            this.JOB[FLAVOUR] = new Promise((resolve, reject) => {
                super.stable()
                    .then((stable) => {
                        let data = {
                            body: stable.body,
                            version: 'v' + stable.version,
                            downloadUrl: stable.downloadUrl,
                            releaseDate: stable.releaseDate,
                        }
                        store.commit({
                            type: 'setRelease',
                            _repo: REPO,
                            _flavour: FLAVOUR,
                            _data: data
                        })
                        resolve(store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR }))
                    })
                    .catch(err => {
                        throw new Error(err)
                    })
            })
            let response = await this.JOB[FLAVOUR]
            delete this.JOB[FLAVOUR]
            return response
        } catch (e) {
            console.error(e)
            throw new Error(e)
        }

    };

    async preview(store) {
        const REPO = 'tachiyomi'
        const FLAVOUR = 'preview'
        if (this.JOB.hasOwnProperty(FLAVOUR)) {
            try {
                await this.JOB
            } catch (e) {
                throw new Error(e)
            }
        }
        if (store.getters.isFlavourUpdated({ _repo: REPO, _flavour: FLAVOUR })) {
            return store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR })
        }
        try {
            this.JOB[FLAVOUR] = new Promise((resolve, reject) => {
                super.preview()
                    .then((preview) => {
                        let data = {
                            body: preview.body,
                            version: 'v' + preview.version,
                            downloadUrl: preview.downloadUrl,
                            releaseDate: preview.releaseDate,
                        }
                        store.commit({
                            type: 'setRelease',
                            _repo: REPO,
                            _flavour: FLAVOUR,
                            _data: data
                        })
                        resolve(store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR }))
                    })
                    .catch(err => {
                        throw new Error(err)
                    })
            })
            let response = await this.JOB[FLAVOUR]
            delete this.JOB[FLAVOUR]
            return response
        } catch (e) {
            console.error(e)
            throw new Error(e)
        }
    };
}

class Fetchers {
    constructor() {
        this.fetchers = {
            tachiyomi: new Tachiyomi()
        }
        this.install = function (Vue) {
            Vue.prototype.$fetchers = this.fetchers
        }
    }
}

export { Tachiyomi, Fetchers }