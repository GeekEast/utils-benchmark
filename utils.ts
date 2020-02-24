import now from 'performance-now';
import _ from 'lodash';
import uuid from 'uuid/v4';

export const generateData = (count) => {
  const arr = _.map(_.range(1, count), item => {
    return { key: item, title: `task ${item}`, complete: false }
  });
  return _.keyBy(arr, 'key');
}

export const generateNewData = (count) => {
  const arr = _.map(_.range(1, count), item => {
    return { key: uuid(), number: _.random(0, 100000) }
  })
  return _.keyBy(arr, 'key');
}

export const getPerformance = (callback, ...params) => {
  const start = now();
  callback(...params);
  const end = now();
  return (end - start).toFixed(3)
}