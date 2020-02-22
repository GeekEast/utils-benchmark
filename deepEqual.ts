import { generateDate, getPerformance } from "./utils";
import _ from 'lodash';
import equal from 'fast-deep-equal';  // win
import isEqual from 'react-fast-compare';

const data1 = generateDate(1000000);
const data2 = generateDate(1000000);

console.log(getPerformance(_.isEqual, data1, data2))
console.log(getPerformance(equal, data1, data2))
console.log(getPerformance(isEqual, data1, data2))
