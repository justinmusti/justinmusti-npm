/**
 * Provide a blueprint for storing key/value data.
 */

export default class StorageBase {
    name: string
    prefix: string

    constructor(name: string, prefix: string) {
        this.name = name
        this.prefix = prefix
    }

    get<T = null>(key: string, defaultValue: string | undefined): T {
        throw new Error("Not Implemented")
    }

    set(key: string, value: unknown): void {
        throw new Error("Not Implemented.")
    }

    has(key: string): boolean {
        throw new Error("Not Implemented.")
    }

    unset(key: string): void {
        throw new Error("Not Implemented.")
    }

    clear(): void {
        throw new Error("Not Implemented.")
    }
}
