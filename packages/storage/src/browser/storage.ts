import type { BrowserStorageOptions } from "../types.d.ts"
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

    constructor({ prefix }: BrowserStorageOptions = {}) {
        super({ prefix })
        this.engine = localStorage
    }

    set<T = string>(key: string, value: T) {
        this.engine.setItem(this.getKey(key), value as string)
    }

    get<T = null>(key: string, defaultValue?: T): T {
        const out = (this.engine.getItem(this.getKey(key)) ?? defaultValue) as T
        if (isJson(out)) {
            return JSON.parse(out as string) as T
        }
        return out
    }

    has(key: string): boolean {
        return this.engine.getItem(this.getKey(key)) !== null
    }

    unset(key: string) {
        this.engine.removeItem(this.getKey(key))
    }

    clear() {
        this.engine.clear()
    }
}
