> group :: Eq a => [a] -> [[a]]

```ts
import group from 'fp-ts-group'

assert.deepStrictEqual(group(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
```
