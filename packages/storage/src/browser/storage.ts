import { isJson } from "@justinmusti/utils"
import StorageBase from "../blueprints/storage"

/**
 * Provide a Storage class with unified functionality for browsers.
 * Uses localStorage
 *
 * {@linkcode} https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
export default class Storage extends StorageBase {
    engine: typeof localStorage

    constructor() {
        super()
        this.engine = localStorage
    }

    set(key: string, value: string) {
        this.engine.setItem(key, value)
    }

    get<T = null>(key: string, defaultValue: string): T {
        const out = (this.engine.getItem(key) ?? defaultValue) as T
        if (isJson(out)) {
            return JSON.parse(out as string) as T
        }
        return out
    }

    has(key: string): boolean {
        return this.engine.getItem(key) === null
    }

    unset(key: string) {
        this.engine.removeItem(key)
    }

    clear() {
        this.engine.clear()
    }
}
