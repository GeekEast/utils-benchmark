import now from 'performance-now';
import _ from 'lodash';

export const generateDate = (count) => {
  const arr = _.map(_.range(1, count), item => {
    return { key: item, title: `task ${item}`, complete: false }
  });
  return _.keyBy(arr, 'key');
}

export const getPerformance = (callback, ...params) => {
  const start = now();
  console.log(callback(...params));
  const end = now();
  return (end - start).toFixed(3)
}