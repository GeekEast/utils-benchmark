import _ from 'lodash'
import { generateData, getPerformance } from './utils';

const data = generateData(1000000);
const ids = _.keys(data);

getPerformance(_.values, data, "id");
getPerformance(_.map, ids, id => data[id])

