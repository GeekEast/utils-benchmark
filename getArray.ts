import _ from 'lodash'
import { generateData, getPerformance } from './utils';

const data = generateData(1000000);

getPerformance(_.values, data);
getPerformance(_.map, _.keys(data), id => _.get(data, id))



