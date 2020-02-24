
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
- `fast-sort`: 5298.712
- `lodash/sortBy`: 3852.827

### Choice
- Lodash/sortBy

### Utils Cook
```javascript
import _ from 'lodash';
export const lodash_sortKeysBy = (data, bys) => {
  const keys = Object.keys(data);
  const orders = _.values(bys);
  const attr_getters = _.map(_.keys(bys), attr => key => _.get(data, [key, attr]))
  return _.orderBy(keys, attr_getters, orders);
}
```

