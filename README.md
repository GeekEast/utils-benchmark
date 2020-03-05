
## Immutable
### Test
- `ts-node immutable.ts`

### Result
```json
------es6Reducer result-------
RAM        :  96 MB
HeapTotal  :  69 MB
HeapUsed   :  72 MB
External   :  0 Byte
CPU        :  385.773 ms
Spend time :  389 ms
------lodashReducer result-------
RAM        :  80 MB
HeapTotal  :  71 MB
HeapUsed   :  72 MB
External   :  0 Byte
CPU        :  280.702 ms
Spend time :  196 ms
------immutableJsReducer result-------
RAM        :  69 MB
HeapTotal  :  68 MB
HeapUsed   :  72 MB
External   :  0 Byte
CPU        :  133.673 ms
Spend time :  133 ms
------ramdaReducer result-------
RAM        :  76 MB
HeapTotal  :  70 MB
HeapUsed   :  57 MB
External   :  0 Byte
CPU        :  128.905 ms
Spend time :  128 ms
------immerReducer result-------
RAM        :  59 MB
HeapTotal  :  45 MB
HeapUsed   :  45 MB
External   :  0 Byte
CPU        :  1454.342 ms
Spend time :  1023 ms
------seamlessImmutableReducer result-------
RAM        :  173 MB
HeapTotal  :  207 MB
HeapUsed   :  167 MB
External   :  0 Byte
CPU        :  8565.081 ms
Spend time :  6245 ms
```

### Choice
- `Lodash/fp`: simple, fast and already included in production line.

### References
- [Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux/)

## Shallow Compare
### Test
- `ts-node shallowEqual.ts`

### Result
```json
------equal result-------
RAM        :  59 MB
HeapTotal  :  42 MB
HeapUsed   :  41 MB
External   :  0 Byte
CPU        :  310.102 ms
Spend time :  131 ms
------shallowEqual result-------
RAM        :  96 MB
HeapTotal  :  82 MB
HeapUsed   :  82 MB
External   :  0 Byte
CPU        :  147.592 ms
Spend time :  148 ms
------shallowEqual result-------
RAM        :  93 MB
HeapTotal  :  81 MB
HeapUsed   :  93 MB
External   :  0 Byte
CPU        :  1303.939 ms
Spend time :  1296 ms
------shallowEqual result-------
RAM        :  85 MB
HeapTotal  :  81 MB
HeapUsed   :  82 MB
External   :  0 Byte
CPU        :  144.848 ms
Spend time :  144 ms
------comparator result-------
RAM        :  86 MB
HeapTotal  :  81 MB
HeapUsed   :  82 MB
External   :  0 Byte
CPU        :  400.005 ms
Spend time :  181 ms
```
### Choice:
- `fast-shallow-equal`

## Deep Compare
### Test
- `ts-node deepEqual.ts`

### Result
```json
------isEqual result-------
RAM        :  15 MB
HeapTotal  :  14 MB
HeapUsed   :  18 MB
External   :  0 Byte
CPU        :  210.929 ms
Spend time :  147 ms
------equal result-------
RAM        :  8 MB
HeapTotal  :  6 MB
HeapUsed   :  6 MB
External   :  0 Byte
CPU        :  52.248 ms
Spend time :  50 ms
------isEqual result-------
RAM        :  8 MB
HeapTotal  :  7 MB
HeapUsed   :  6 MB
External   :  0 Byte
CPU        :  47.132 ms
Spend time :  45 ms
```

### Choice:
- `fast-deep-equal`

### Self-Made `smartStrictCompare`
```javascript
import deepEqual from 'fast-deep-equal';
import { equal } from 'fast-shallow-equal';

const getType = (sth) => {
  return Object.prototype.toString.call(sth).slice(8, -1);
}

const deepObject = (obj) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const type = getType(obj[keys[i]]);
    if (type === 'Object' || type === 'Array') return true
  }
  return false
}

export const smartStrictEqual = (prev, next) => {
  const prevType = getType(prev);
  const nextType = getType(next);
  if (prevType !== nextType) return Object.is(prev, next);
  if (prevType === 'Array') return deepEqual(prev, next);
  if (prevType !== 'Object') return Object.is(prev, next)
  if (deepObject(prev) || deepObject(next)) return deepEqual(prev, next)
  return equal(prev, next)
}
```

## Sort Keys By Attributes
### Test
- `ts-node sorting.ts`

### Result
```json
------sortKeysBy result-------
RAM        :  17 MB
HeapTotal  :  17 MB
HeapUsed   :  23 MB
External   :  0 Byte
CPU        :  5082.609 ms
Spend time :  5094 ms
------lodash_sortKeysBy result-------
RAM        :  116 MB
HeapTotal  :  111 MB
HeapUsed   :  127 MB
External   :  0 Byte
CPU        :  4208.04 ms
Spend time :  3841 ms
------normalSort result-------
RAM        :  150 MB
HeapTotal  :  147 MB
HeapUsed   :  148 MB
External   :  NaN undefined
CPU        :  4010.174 ms
Spend time :  3741 ms
```

### Choice
- `sortKeysBy`: **significant** save `memory` in client

### Self Made `sortKeysBy`
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


## Filter Objects
### Test
- `ts-node filtering.ts`

### Result
```json
------filter_obj result-------
RAM        :  19 MB
HeapTotal  :  17 MB
HeapUsed   :  16 MB
External   :  NaN undefined
CPU        :  97.111 ms
Spend time :  91 ms
------lodash result-------
RAM        :  14 MB
HeapTotal  :  14 MB
HeapUsed   :  17 MB
External   :  0 Byte
CPU        :  62.076 ms
Spend time :  61 ms
```

### Choice
- `lodash`


## Transform to Array
### Test
```sh
ts-node getArray.ts
```

### Result
```json
------values result-------
RAM        :  59 MB
HeapTotal  :  57 MB
HeapUsed   :  56 MB
External   :  0 Byte
CPU        :  117.734 ms
Spend time :  118 ms
------map result-------
RAM        :  8 MB
HeapTotal  :  8 MB
HeapUsed   :  8 MB
External   :  0 Byte
CPU        :  29.165 ms
Spend time :  29 ms
```
### Choice
- Store ids in another place
- get entities by `_.map(ids, id => data[id])`

## Getter
### Test
```sh
ts-node getter.ts
```

### Result
```json
------getter1 result-------
RAM        :  56 KB
HeapTotal  :  0 Byte
HeapUsed   :  51 KB
External   :  0 Byte
CPU        :  2.317 ms
Spend time :  2 ms
------getter2 result-------
RAM        :  4 KB
HeapTotal  :  0 Byte
HeapUsed   :  4 KB
External   :  0 Byte
CPU        :  0.239 ms
Spend time :  0 ms
```

### Choice
- `lodash`


