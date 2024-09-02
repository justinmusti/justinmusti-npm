import StorageBase from "../blueprints/storage";
export default class Storage extends StorageBase {
    engine: typeof localStorage;
    constructor(name: string, prefix: string);
    set(key: string, value: string): void;
    get<T = null>(key: string, defaultValue: string): T;
    has(key: string): boolean;
    unset(key: string): void;
    clear(): void;
}
