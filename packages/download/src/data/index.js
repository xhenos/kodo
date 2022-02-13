import ReleaseAPI from "./api";
import ReleaseStore from "./local";

const api = new ReleaseAPI()
const store = new ReleaseStore()

async function fetchLatest() {
  if (store.isValid()) {
    return store.fetch()
  }
  const data = await api.fetchLatest()
  return store.save(data)
}

export default class ReleaseRepository {
  async getLatest() {
    return await fetchLatest()
  }
}
