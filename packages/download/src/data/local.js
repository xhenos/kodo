import { releases, updatedAt } from "../util/stores";

let cache;
let cachedAt;

releases.subscribe((value) => {
  cache = value;
});

updatedAt.subscribe((value) => {
  cachedAt = value;
});

export default class ReleaseStore {
  isValid() {
    const now = new Date().getTime();
    return cache !== undefined && cachedAt + 1000 * 60 * 60 > now;
  }

  fetch() {
    return cache;
  }

  save(data) {
    releases.set(data);
    updatedAt.set(new Date().getTime());
    return data;
  }
}
