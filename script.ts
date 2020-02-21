import { set, lensProp, lensPath, over } from 'ramda';

const ramdaReducer = (todos, id) => set(lensPath([id,'complete']), true, todos);

const data = {
  "1": { key: 1, complete: false }
}

console.log(ramdaReducer(data, "1"))