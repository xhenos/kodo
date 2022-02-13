import { writable } from "svelte/store";

const storedUpdatedAt = JSON.parse(localStorage.getItem("releases_updated_at"));
export const updatedAt = writable(storedUpdatedAt);
updatedAt.subscribe((value) => {
  localStorage.setItem("releases_updated_at", JSON.stringify(value));
});

const storedReleases = JSON.parse(localStorage.getItem("releases"));
export const releases = writable(storedReleases);
releases.subscribe((value) => {
  localStorage.setItem("releases", JSON.stringify(value));
});
