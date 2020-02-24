
## Immutable
### Test
- `ts-node immutable.ts`

### Result

|         Lib          |     Perf      |    size    |   stars    |       Comment       |
| :------------------: | :-----------: | :--------: | :--------: | :-----------------: |
|       `ramda`        | **143.053ms** |   **7k**   |  `18300`   |   small and fast    |
|     `Immutable`      |  `146.901ms`  |  `60.9k`   |  `29222`   |     Complicated     |
|     `Lodash/fp `     |  `159.368ms`  |  `81.8k`   | **436000** | **Simple and Fast** |
|        `ES6`         |  `369.900ms`  | `Internal` |   `Null`   |  No external libs   |
|       `Immer`        | `1098.237ms`  |  `20.4k `  |  `15300`   |   Simple but Slow   |
| `seamless-immutable` | `5578.396ms`  |   `8.4k`   |   `5200`   |      very slow      |

### Choice
- Lodash/fp

### References
- [Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux/)

## Deep Compare
### Test
- `ts-node deepEqual.ts`

### Result

- lodash/isEqual  1494.232
- fast-deep-equal:  343.625
- react-fast-compare:   426.713

### Choice:
- fast-deep-equal

## Sort Keys By Attributes
### Test
- `ts-node sorting.ts`

### Result
- `sortKeysBy`
```json
{ diffRAM: '16 MB',
  diffHeapTotal: '15 MB',
  diffHeapUsed: '17 MB',
  diffExternal: 'NaN undefined',
  diffCPU: 5057.565,
  diffTime: 5045 }
```
- `lodash_sortKeysBy`
```json
{ diffRAM: '117 MB',
  diffHeapTotal: '114 MB',
  diffHeapUsed: '128 MB',
  diffExternal: '0 Byte',
  diffCPU: 4378.469,
  diffTime: 3943 }
```
- `normalSort`
```json
{ diffRAM: '150 MB',
  diffHeapTotal: '147 MB',
  diffHeapUsed: '149 MB',
  diffExternal: '0 Byte',
  diffCPU: 4222.972,
  diffTime: 3945 }
```

### Choice
- `sortKeysBy`: **significant** save `memory` in client

### Utils Cook
```javascript
import sort from 'fast-sort';
import _ from 'lodash';

// data: {  'a': { a: 2, b: 3 }, 'b': { a: 3, b: 19 }  }
// bys: { 'a': 'asc','b': 'desc' }
export const sortKeysBy = (data, bys) => {
  const keys = Object.keys(data);
  const attrs = _.map(bys, (order, attr) => ({ [<string>order]: key => _.get(data, [key, attr]) }));
  // @ts-ignore
  return sort(keys).by(attrs);
}
```

