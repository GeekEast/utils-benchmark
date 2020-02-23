import { generateDate, getPerformance } from "./utils";
import _ from 'lodash';
import equal from 'fast-deep-equal';  // win
import isEqual from 'react-fast-compare';

const data1 = generateDate(1000000);
const data2 = generateDate(1000000);

console.log('lodash/isEqual ', getPerformance(_.isEqual, data1, data2))
console.log('fast-deep-equal: ', getPerformance(equal, data1, data2))
console.log('react-fast-compare:  ', getPerformance(isEqual, data1, data2))

// 对Array同样有效
console.log(isEqual([[[]]],[[[1]]]));
// 对function无效，保证function immutable
console.log(isEqual(()=>{}, ()=>{}))


