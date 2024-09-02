import StorageBase from "../blueprints/storage"
import * as fs from "node:fs"
const content = "Some content!"

export default class Storage extends StorageBase {
    engine: typeof fs
    path: string

    constructor(name: string, prefix: string, path: string) {
        super(name, prefix)
        this.engine = fs
        this.path = path
    }

    set(key: string, value: string) {
        const content = JSON.stringify({
            [key]: value
        })
        this.engine.writeFileSync(this.path, content)
    }

    get<T = null>(key: string, defaultValue: string): T {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        if (!content.hasOwnProperty(key)) {
            return defaultValue as T
        }
        return content[key] as T
    }

    has(key: string): boolean {
        const _content = this.engine.readFileSync(this.path, "utf8")
        const content = JSON.parse(_content ?? "{}")
        return content.hasOwnProperty(key)
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
