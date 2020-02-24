import { generateNewData, getPerformance } from './utils';
import _ from 'lodash';
import { sortKeysBy, lodash_sortKeysBy } from './utils/sortKeysBy';

// [key: { key, number}]
const data = generateNewData(1000000);
console.log(
  getPerformance(
    sortKeysBy,
    data,
    {'number': 'asc'}
  )
)

console.log(
  getPerformance(
    lodash_sortKeysBy,
    data,
    {'number': 'asc'}
  )
)