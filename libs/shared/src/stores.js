import { writable } from "svelte/store";

export const darkmode = writable(true);

(async () => {
    darkmode.set((await cookieStore.get("darkmode")).value === "true")
})();

darkmode.subscribe(async (value) => {
    console.log(value, isProduction)
    cookieStore.set({
        name: "darkmode",
        value: value,
        domain: isProduction ? "kodo.moe" : undefined
    });
});
