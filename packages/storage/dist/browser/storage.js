import StorageBase from "../blueprints/storage";
import { isJson } from "utils";
export default class Storage extends StorageBase {
    constructor(name, prefix) {
        super(name, prefix);
        this.engine = localStorage;
    }
    set(key, value) {
        this.engine.setItem(key, value);
    }
    get(key, defaultValue) {
        var _a;
        const out = ((_a = this.engine.getItem(key)) !== null && _a !== void 0 ? _a : defaultValue);
        if (isJson(out)) {
            return JSON.parse(out);
        }
        return out;
    }
    has(key) {
        return this.engine.getItem(key) === null;
    }
    unset(key) {
        this.engine.removeItem(key);
    }
    clear() {
        this.engine.clear();
    }
}
//# sourceMappingURL=storage.js.map