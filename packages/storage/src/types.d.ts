export interface BrowserStorageOptions {
    prefix?: string
}

export interface NodeStorageOptions extends BrowserStorageOptions {
    path: string
}

declare module "@justinmusti/storage"
declare module "@justinmusti/storage/browser"
declare module "@justinmusti/storage/node"
