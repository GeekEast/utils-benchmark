import _ from "lodash";
import { update } from 'immutable';
import produce from 'immer';
import { update as lpdate } from 'lodash/fp';
import Immutable from 'seamless-immutable';
import { generateData, test } from './utils';
import { set, lensPath } from 'ramda';

const immutableJsReducer = (todos, id) => update(todos, id, (val: any) => update(val, 'complete', v => !v))
const lodashReducer = (todos, id) => lpdate([id, 'complete'], x => !x, todos)
const ramdaReducer = (todos, id) => set(lensPath([id, 'complete']), true, todos);
const es6Reducer = (todos, id) => { return { ...todos, [id]: { ...todos[id], complete: !todos[id].complete } } }
const immerReducer = (todos, id) => produce(todos, draft => { draft[id].complete = true })
const seamlessImmutableReducer = (todos, id) => Immutable(todos).updateIn([id, 'complete'], x => !x);

const data = generateData(1000000);
test([es6Reducer, lodashReducer, immutableJsReducer, ramdaReducer, immerReducer, seamlessImmutableReducer], data, '5000');


