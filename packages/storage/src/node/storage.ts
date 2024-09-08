import * as fs from "node:fs"
import { NodeStorageOptions } from "../types"
import StorageBase from "../blueprints/storage"

export default class Storage extends StorageBase {
    engine: typeof fs
    path: string

    /**
     * Initialize Storage for Node.js.
     * @param {string} path: file path that storage is going to be storing the data.
     */
    constructor({ path }: NodeStorageOptions) {
        super()
        if (!path) {
            throw new Error("path must be provided.")
        }
        this.engine = fs
        this.path = path
    }

    set(key: string, value: string) {
        const content = JSON.stringify({
            [key]: value
        })
        this.engine.writeFileSync(this.path, content)
    }

    get<T = null>(key: string, defaultValue: T | string): T {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        if (!Object.prototype.hasOwnProperty.call(content, key)) {
            return defaultValue as T
        }
        return content[key] as T
    }

    has(key: string): boolean {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        return Object.prototype.hasOwnProperty.call(content, key)
    }

    unset(key: string) {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        delete content[key]
        this.engine.writeFileSync(this.path, content)
    }

    clear() {
        this.engine.writeFileSync(this.path, "{}")
    }
}
