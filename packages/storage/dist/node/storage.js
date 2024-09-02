import StorageBase from "../blueprints/storage";
import * as fs from "node:fs";
const content = "Some content!";
export default class Storage extends StorageBase {
    constructor(name, prefix, path) {
        super(name, prefix);
        this.engine = fs;
        this.path = path;
    }
    set(key, value) {
        const content = JSON.stringify({
            [key]: value
        });
        this.engine.writeFileSync(this.path, content);
    }
    get(key, defaultValue) {
        const _content = this.engine.readFileSync(this.path, "utf8");
        const content = JSON.parse(_content !== null && _content !== void 0 ? _content : "{}");
        if (!content.hasOwnProperty(key)) {
            return defaultValue;
        }
        return content[key];
    }
    has(key) {
        const _content = this.engine.readFileSync(this.path, "utf8");
        const content = JSON.parse(_content !== null && _content !== void 0 ? _content : "{}");
        return content.hasOwnProperty(key);
    }
    unset(key) {
        const _content = this.engine.readFileSync(this.path, "utf8");
        const content = JSON.parse(_content !== null && _content !== void 0 ? _content : "{}");
        delete content[key];
        this.engine.writeFileSync(this.path, content);
    }
    clear() {
        this.engine.writeFileSync(this.path, "{}");
    }
}
//# sourceMappingURL=storage.js.map