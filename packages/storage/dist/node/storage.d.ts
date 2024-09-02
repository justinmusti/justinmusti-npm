import StorageBase from "../blueprints/storage";
import * as fs from "node:fs";
export default class Storage extends StorageBase {
    engine: typeof fs;
    path: string;
    constructor(name: string, prefix: string, path: string);
    set(key: string, value: string): void;
    get<T = null>(key: string, defaultValue: string): T;
    has(key: string): boolean;
    unset(key: string): void;
    clear(): void;
}
