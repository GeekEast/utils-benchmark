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

export const lodash_sortKeysBy = (data, bys) => {
  const keys = Object.keys(data);
  const orders = _.values(bys);
  const attr_getters = _.map(_.keys(bys), attr => key => _.get(data, [key, attr]))
  return _.orderBy(keys, attr_getters, orders);
}

// example
const obj = {
  '1': { 'user': 'fred', 'age': 48 },
  '2': { 'user': 'barney', 'age': 34 },
  '3': { 'user': 'fred', 'age': 40 },
  '4': { 'user': 'barney', 'age': 1 },
  '5': { 'user': 'barney', 'age': 100},
  '6': { 'user': 'barney', 'age': 346 },
  '7': { 'user': 'barney', 'age': 2 },
  '8': { 'user': 'barney', 'age': 4000 },
  '9': { 'user': 'barney', 'age': 396 }
}
// result: [ '4', '2', '1', '3' ]
console.log(sortKeysBy(obj, { 'user': 'asc', 'age': 'desc' }));
console.log(lodash_sortKeysBy(obj, { 'user': 'asc', 'age': 'desc' }));
