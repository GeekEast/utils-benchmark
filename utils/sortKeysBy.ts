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

// data: {  'a': { a: 2, b: 3 }, 'b': { a: 3, b: 19 }  }
// bys: { 'a': 'asc','b': 'desc' }
export const lodash_sortKeysBy = (data, bys) => {
  const keys = Object.keys(data);
  const orders = _.values(bys);
  const attr_getters = _.map(_.keys(bys), attr => key => _.get(data, [key, attr]))
  return _.orderBy(keys, attr_getters, orders);
}

// data: {  'a': { a: 2, b: 3 }, 'b': { a: 3, b: 19 }  }
// bys: { 'a': 'asc','b': 'desc' }
export const normalSort = (data, bys) => _.map((_.orderBy(_.values(data), _.keys(bys), _.values(bys))), obj => obj.key);

// example
// const obj = {
//   '1': { key: '1','user': 'fred', 'age': 48 },
//   '2': { key: '2','user': 'barney', 'age': 34 },
//   '3': { key: '3','user': 'fred', 'age': 40 },
//   '4': { key: '4','user': 'barney', 'age': 1 },
//   '5': { key: '5','user': 'barney', 'age': 100 },
//   '6': { key: '6','user': 'barney', 'age': 346 },
//   '7': { key: '7','user': 'barney', 'age': 2 },
//   '8': { key: '8','user': 'barney', 'age': 4000 },
//   '9': { key: '9','user': 'barney', 'age': 396 }
// }
// // result: [ '4', '2', '1', '3' ]
// console.log(sortKeysBy(obj, { 'user': 'asc', 'age': 'desc' }));
// console.log(lodash_sortKeysBy(obj, { 'user': 'asc', 'age': 'desc' }));
// console.log(normalSort(obj, { 'user': 'asc', 'age': 'desc' }));
