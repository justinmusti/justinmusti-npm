## @justinmusti/storage

This is a platform-agnostic storage utility class.  

Supported environments:
    * Node
    * Browser

## How to Use  


### import 

```javascript

import {Storage} from "@justinmusti/storage"

```

### Init
``` javascript
// Browser
const storage = new Storage()

// Node
const storage = new Storage({path: "path-to-file-to-write-to"})
```

### Create entry in storage

```javascript
storage.set("test", "hello")
// Browser: localStorage now has `test` entry with value 'hello'
// Node: file at provided path now has `test` entry with value 'hello'

```
### Check if storage has key

```javascript
storage.has('uploadURL') // returns true or false
```

### Delete key from storage.
```javascript
storage.removeitem('test')
storage.has('test')  // Now this returns false.
```

### Remove all/Clear 

```javascript
storage.clear()
// All entries are removed.
```


