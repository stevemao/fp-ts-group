> fp-ts group and groupBy

```ts
import {groupBy} from 'fp-ts-group'

assert.deepStrictEqual(groupBy(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
```
