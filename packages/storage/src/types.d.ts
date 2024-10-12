export interface BrowserStorageOptions {
    prefix?: string
}

export interface NodeStorageOptions extends BrowserStorageOptions {
    path: string
}
