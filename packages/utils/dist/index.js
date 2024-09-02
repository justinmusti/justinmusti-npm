export function isJson(item) {
    let value = typeof item !== "string" ? JSON.stringify(item) : item;
    try {
        value = JSON.parse(value);
    }
    catch (e) {
        return false;
    }
    return typeof value === "object" && value !== null;
}
//# sourceMappingURL=index.js.map