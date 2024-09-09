/**
 * Check if a given item of unknown type is a valid JSON object.
 * @param item {unknown} Payload that needs to be checked whether it is a valid JSON
 */
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

/**
 * Group a given array into provided number of elements.
 * @example
 * const myList = [1, 2, 3, 4, 5, 6, 7]
 * console.log(groupArray(myList), 3)
 * // [[1, 2, 3], [4, 5, 6], [7]]
 * @param arr {array} The array that needs to be grouped.
 * @param n {number} group size.
 */
export function groupArray<T = unknown>(arr: T[], n: number) {
    const segment: T[][] = []
    for (let i = 0; i < arr.length; i += n) {
        segment.push(arr.slice(i, i + n))
    }
    return segment
}

/**
 * Generate and return a reproducable hash from a given string payload.
 * Taken from the following StackOverflow answer.
 * {@link} https://stackoverflow.com/a/7616484
 * @param payload {string}  The data that would be sourced to generate the hash
 */
export function genHash(payload: string): number {
    let hash = 0,
        chr: number
    if (payload.length === 0) return hash
    for (let i = 0; i < payload.length; i++) {
        chr = payload.charCodeAt(i)
        hash = (hash << 5) - hash + chr
        hash |= 0 // Convert to 32bit integer
    }
    return hash
}
