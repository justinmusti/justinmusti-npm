/**
 * Provide a blueprint for storing key/value data.
 */
export default abstract class StorageBase {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {}

    /**
     * Retrieve and return the value of a given key from the storage.
     *
     * Return defaultValue if provided when the key does not exist in storage.
     *
     * @param {string} key
     * @param {unknown} defaultValue
     * @example
     * const storage = new Storage()
     * storage.get("uploadURL", "https://filelib.com/upload/jawidahwdawd/")
     * // uploadURL value if exists
     * // https://filelib.com/upload/jawidahwdawd/ if key does not exist
     */

    abstract get<T = null>(key: string, defaultValue: T | string): T

    /**
     * Create an entry in the target storage.
     *
     * Return void.
     *
     * @param {string} key
     * @param {unknown} value
     * @example
     * const storage = new Storage()
     * storage.set("token", "abcde")
     * // storage will now have the key token with value "abcde"
     */
    abstract set(key: string, value: unknown): void

    /**
     * Check if the storage has the given key in it.
     * Return boolean
     * @param {string} key
     */
    abstract has(key: string): boolean

    /**
     * Delete the entry identified by the given key
     * @param {string} key
     */
    abstract unset(key: string): void

    /**
     * Truncate the entire storage.
     */
    abstract clear(): void
}
