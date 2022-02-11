import { writable } from "svelte/store";

const storedUpdatedAt = JSON.parse(
  localStorage.getItem("extensions_updated_at")
);
export const updatedAt = writable(storedUpdatedAt);
updatedAt.subscribe((value) => {
  localStorage.setItem("extensions_updated_at", JSON.stringify(value));
});

const storedExtensions = JSON.parse(localStorage.getItem("extensions"));
export const extensions = writable(storedExtensions);
extensions.subscribe((value) => {
  localStorage.setItem("extensions", JSON.stringify(value));
});
