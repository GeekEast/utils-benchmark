import _ from "lodash";
import now from 'performance-now';
import { update } from 'immutable';
import produce from 'immer';
import { set } from 'lodash/fp';
import Immutable from 'seamless-immutable';

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
  return (end - start).toFixed(3)
}

const es5Reducer = (todos, id) => { return { ...todos, [id]: { ...todos[id], complete: !todos[id].complete } } }
const immutableJsReducer = (todos, id) => update(todos, id, (val: any) => update(val, 'complete', v => !v))
const immerReducer = (todos, id) => produce(todos, draft => { draft[id].complete = true })
const lodashReducer = (todos, id) => set([id, 'complete'], true, todos)
const seamlessImmutableReducer = (todos, id) => Immutable(todos).setIn([id, 'complete'], true);


const data = generateDate(100000);

const getAverage = (count, reducer, data, id) => {
  const res: any = [];
  for (let i = 0; i < count; i++) {
    const a = getPerformance(reducer, data, id)
    res.push(parseFloat(a))
  }
  console.log(reducer.name, ': ', _.mean(res));
}

getAverage(10, es5Reducer, data, '5000')
getAverage(10, lodashReducer, data, '5000')
getAverage(10, immutableJsReducer, data, '5000')
getAverage(10, immerReducer, data, '5000')
getAverage(10, seamlessImmutableReducer, data, '5000');

