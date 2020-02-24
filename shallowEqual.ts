import { generateData, test } from './utils';
import { equal } from 'fast-shallow-equal';
import { shallowEqual } from '@react-dnd/shallowequal';
import enzymeShallowEqual from 'enzyme-shallow-equal';
import shallowequal from 'shallowequal';
import { shallowEqual as fastShallowEquals } from 'fast-equals';
import shallowEquals from 'shallow-equals';
import isEqualShallow from 'is-equal-shallow';
const data1 = generateData(1000000);
const data2 = generateData(1000000);

test(
  [
    equal,
    shallowEqual,
    enzymeShallowEqual,
    shallowequal,
    fastShallowEquals,
    shallowEquals,
    isEqualShallow
  ], data1, data2)

