import { generateNewData, getPerformance } from './utils';
import filterObject from 'filter-obj';
import { filter, keyBy } from 'lodash';

const filter_obj = (data) => filterObject(data, (_key, val) => val.number > 10000)
const lodash = (data) => keyBy(filter(data, (val, _key) => val.number > 10000), "key")

getPerformance(filter_obj, generateNewData(100000))
getPerformance(lodash, generateNewData(100000))