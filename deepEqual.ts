import { generateData, getAverage } from './utils';
import _ from 'lodash';
import equal from 'fast-deep-equal';  // win
import isEqual from 'react-fast-compare';

const data1 = generateData(1000000);
const data2 = generateData(1000000);

getAverage(10, _.isEqual, data1, data2);
getAverage(10, equal, data1, data2);
getAverage(10, isEqual, data1, data2)

// // 对Array同样有效
// console.log(isEqual([[[]]],[[[1]]]));
// // 对function无效，保证function immutable
// console.log(isEqual(()=>{}, ()=>{}))


