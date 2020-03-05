import _ from 'lodash';
import { generateData, getPerformance } from './utils';

const data = generateData(1000000);

const getter1 = (data, idx) => data[idx]
const getter2 = (data, idx) => _.get(data, idx);

getPerformance(getter1, data, 1);
getPerformance(getter2, data, 1);
