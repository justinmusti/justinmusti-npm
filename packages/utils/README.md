### @justinmusti/utils

I have created this to store my utility functions/classes etc.
Feel free to use it as you please within compliance of the LICENSE.

## How to use

```javascript
import { funtionName } from "@justinmusti/utils"
```

### isJson

Check if a given parameter is a valid JSON.

```javascript
import { isJson } from "@justinmusti/utils"
console.log("IS THIS JSON?", isJson("{"))  // false
console.log("IS THIS JSON?", isJson("{}"))  // true
```

### groupArray

Group a given array into sections by provided number

```javascript
import { groupArray } from "@justinmusti/utils"
const myList = [1, 2, 3, 4, 5, 6, 7]
console.log(groupArray(myList), 3) 
// [[1, 2, 3], [4, 5, 6], [7]]

```

### genHash

Generate and return a reproducible has from a given string.

```javascript
import { genHash } from "@justinmusti/utils"
const hash = genHash("getMeHashedUpFam")
console.log(hash) 
// 553239516

```

### strToASCII

Extract and return ascii characters only from given string.
Defaults to empty string if no character matches.

```javascript
import { strToASCII } from "@justinmusti/utils"
const asciiOnly = strToASCII("HelloAscii é, à, ö, ñ")
console.log(asciiOnly)
// HelloAscii

// Overrite character list
const asciiOnlywithAlter = strToASCII("HelloAscii é, à, ö, ñ", "A")
console.log(asciiOnlywithAlter)
// A

```

