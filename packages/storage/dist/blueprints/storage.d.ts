/**
 * Provide a blueprint for storing key/value data.
 */
export default class StorageBase {
    name: string;
    prefix: string;
    constructor(name: string, prefix: string);
    get<T = null>(key: string, defaultValue: string | undefined): T;
    set(key: string, value: unknown): void;
    has(key: string): boolean;
    unset(key: string): void;
    clear(): void;
}
