import { generateData, getPerformance, test } from './utils';
import { isEqual as lodash_isEqual } from 'lodash';
import fast_deep_equal from 'fast-deep-equal';  // win
import react_fast_compare from 'react-fast-compare';

const data1 = generateData(1000000);
const data2 = generateData(1000000);

test([lodash_isEqual, fast_deep_equal, react_fast_compare], data1, data2);
