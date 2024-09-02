/**
 * Provide a blueprint for storing key/value data.
 */
export default class StorageBase {
    constructor(name, prefix) {
        this.name = name;
        this.prefix = prefix;
    }
    get(key, defaultValue) {
        throw new Error("Not Implemented");
    }
    set(key, value) {
        throw new Error("Not Implemented.");
    }
    has(key) {
        throw new Error("Not Implemented.");
    }
    unset(key) {
        throw new Error("Not Implemented.");
    }
    clear() {
        throw new Error("Not Implemented.");
    }
}
//# sourceMappingURL=storage.js.map