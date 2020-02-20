import _ from "lodash";
import now from 'performance-now';
import { update } from 'immutable';
import produce from 'immer';

const generateDate = (count) => {
  const arr = _.map(_.range(1, count), item => {
    return { key: item, title: `task ${item}`, complete: false }
  });
  return _.keyBy(arr, 'key');
}

const getPerformance = (callback, ...params) => {
  const start = now();
  callback(...params)
  const end = now();
  console.log((end - start).toFixed(3))
}


const es5Reducer = (todos, id) => { return { ...todos, [id]: { ...todos[id], complete: !todos[id].complete } } }
const immutableJsReducer = (todos, id) => update(todos, id, (val: any) => update(val, 'complete', v => !v))
const immerReducer = (todos, id) => produce(todos, draft => {
  draft[id].complete = true
})

getPerformance(es5Reducer, generateDate(100000), '5000'); // 32
getPerformance(immutableJsReducer, generateDate(100000), '5000'); // 14
getPerformance(immerReducer, generateDate(100000), '5000'); // 14


