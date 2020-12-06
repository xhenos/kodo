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
        this.REPO = 'tachiyomi'
    }

    async stable(store) {
        const REPO = this.REPO
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
        const REPO = this.REPO
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

class TachiyomiAZ extends Tachiyomi {
    constructor() {
        super()
        this.stableUrl = "https://api.github.com/repos/az4521/tachiyomiAZ/releases/latest"
        this.previewUrl = "https://crafty.moe/tachiyomiAZ.apk"
        this.REPO = 'tachiyomiaz'
    }

    async preview(store) {
        const REPO = this.REPO
        const FLAVOUR = 'preview'
        if (store.getters.isFlavourUpdated({ _repo: REPO, _flavour: FLAVOUR })) {
            return store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR })
        }
        let data = {
            body: 'We have no idea!',
            version: 'Ask AZ',
            downloadUrl: "https://crafty.moe/tachiyomiAZ.apk",
            releaseDate: Date.now(),
        }
        store.commit({
            type: 'setRelease',
            _repo: REPO,
            _flavour: FLAVOUR,
            _data: data
        })
        return Promise.resolve(store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR }))
    }
}

class TachiyomiJ2K extends Tachiyomi {
    constructor() {
        super()
        this.stableUrl = "https://api.github.com/repos/Jays2Kings/tachiyomiJ2K/releases/latest"
        this.previewUrl = ""
        this.REPO = 'tachiyomij2k'
    }

    async preview(store) {
        return Promise.resolve({})
    }
}

class TachiyomiSY extends Tachiyomi {
    constructor() {
        super()
        this.stableUrl = "https://api.github.com/repos/jobobby04/TachiyomiSY/releases/latest"
        this.previewUrl = "https://api.github.com/repos/jobobby04/TachiyomiSYPreview/releases/latest"
        this.REPO = 'tachiyomisy'
    }
}

class Neko extends Tachiyomi {
    constructor() {
        super()
        this.stableUrl = "https://api.github.com/repos/CarlosEsco/Neko/releases/latest"
        this.previewUrl = ""
        this.REPO = 'neko'
    }

    async preview(store) {
        return Promise.resolve({})
    }
}

class Fetchers {
    constructor() {
        this.fetchers = {
            tachiyomi: new Tachiyomi(),
            tachiyomiaz: new TachiyomiAZ(),
            tachiyomij2k: new TachiyomiJ2K(),
            tachiyomisy: new TachiyomiSY(),
            neko: new Neko()
        }
        this.install = function (Vue) {
            Vue.prototype.$fetchers = this.fetchers
        }
    }
}

export { Fetchers }