import group from './'
import { eqNumber } from 'fp-ts/lib/Eq'
import * as assert from 'assert'

assert.deepStrictEqual(group(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
