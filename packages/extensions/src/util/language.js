export function simpleLanguageName(code) {
    if (code === "all") {
        return "All";
    }
    const namesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
    console.log(code)
    return namesInEnglish.of(code);
}

export function fullLanguageName(code) {
    if (code === "all") {
        return "All";
    }
    const namesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
    const namesInNative = new Intl.DisplayNames([code], { type: "language" });
    return `${namesInEnglish.of(code)} - ${namesInNative.of(code)}`;
}

export function sortLanguages(a, b) {
    const langA = simpleLanguageName(a);
    const langB = simpleLanguageName(b);
    if (langA === "All" && langB === "English") {
        return -1;
    }
    if (langA === "English" && langB === "All") {
        return 1;
    }
    if (langA === "English") {
        return -1;
    }
    if (langB === "English") {
        return 1;
    }
    if (langA < langB) {
        return -1;
    }
    if (langA > langB) {
        return 1;
    }
    return 0;
}