export function isJson(item: unknown) {
    let value = typeof item !== "string" ? JSON.stringify(item) : item
    try {
        value = JSON.parse(value)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: unknown) {
        return false
    }
    return typeof value === "object" && value !== null
}
