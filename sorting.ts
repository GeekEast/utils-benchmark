import { generateNewData, getPerformance, test } from './utils';
import sort from 'fast-sort';
import _ from 'lodash';

const sortKeysBy = (data, bys) => {
  const keys = Object.keys(data);
  const attrs = _.map(bys, (order, attr) => ({ [<string>order]: key => _.get(data, [key, attr]) }));
  // @ts-ignore
  return sort(keys).by(attrs);
}

const lodash_sortKeysBy = (data, bys) => {
  const keys = Object.keys(data);
  const orders = _.values(bys);
  const attr_getters = _.map(_.keys(bys), attr => key => _.get(data, [key, attr]))
  return _.orderBy(keys, attr_getters, orders);
}

const normalSort = (data, bys) => _.map((_.orderBy(_.values(data), _.keys(bys), _.values(bys))), obj => obj.key);



// [key: { key, number}]
const data = generateNewData(1000000);
// test([sortKeysBy, lodash_sortKeysBy, normalSort], data, { 'number': 'asc' })

getPerformance(normalSort, data, { 'number': 'asc' })