import * as fs from "node:fs"
import type { NodeStorageOptions } from "../types.d.ts"
import StorageBase from "../blueprints/storage"

export default class Storage extends StorageBase {
    engine: typeof fs
    path: string

    /**
     * Initialize Storage for Node.js.
     * @param { NodeStorageOptions } options Storage options.
     * @param { path } options.path {string} file path that storage is going to be storing the data.
     * @param { prefix } options.prefix {string} prefix to the key where values would be assigned to.
     */
    constructor(options: NodeStorageOptions) {
        const { path, prefix } = options
        super({ prefix })
        if (!path) {
            throw new Error("path must be provided.")
        }
        this.engine = fs
        this.path = path
    }

    set<T = string>(key: string, value: T) {
        const content = JSON.stringify({
            [this.getKey(key)]: value as T
        })
        this.engine.writeFileSync(this.path, content)
    }

    get<T = null>(key: string, defaultValue?: T): T {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        if (!Object.prototype.hasOwnProperty.call(content, this.getKey(key))) {
            return defaultValue as T
        }
        return content[this.getKey(key)] as T
    }

    has(key: string): boolean {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        return Object.prototype.hasOwnProperty.call(content, this.getKey(key))
    }

    unset(key: string) {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        delete content[this.getKey(key)]
        this.engine.writeFileSync(this.path, JSON.stringify(content))
    }

    clear() {
        this.engine.writeFileSync(this.path, "{}")
    }
}
