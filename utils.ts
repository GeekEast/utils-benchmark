import now from 'performance-now';
import _ from 'lodash';
import uuid from 'uuid/v4';
import jm from 'js-meter';

export const generateData = (count) => {
  const arr = _.map(_.range(1, count), item => {
    return { key: item, title: `task ${item}`, complete: false }
  });
  return _.keyBy(arr, 'key');
}

export const generateNewData = (count) => {
  const arr = _.map(_.range(1, count), item => {
    return { key: uuid(), number: _.random(0, 100000), other: _.random(0, 10000000) }
  })
  return _.keyBy(arr, 'key');
}

export const getPerformance = (callback, ...params) => {
  const m = new jm({ isPrint: false });
  callback(...params);
  const meter = m.stop()
  return meter;
}


const parse = (s: string, digit) => {
  const res = parseInt(s.slice(0, digit))
  return isNaN(res) ? 0 : res
}

const sleep = (ms) => {
  const date = Date.now();
  let currentDate;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}


export const getAverage = (count, callback, ...params) => {
  const RAM = <any>[];
  const HeapTotal = <any>[];
  const HeapUsed = <any>[];
  const External = <any>[];
  const CPU = <any>[];
  const Time = <any>[]
  for (let i = 0; i < count; i++) {
    const { diffRAM, diffHeapTotal, diffExternal, diffHeapUsed, diffCPU, diffTime } = getPerformance(callback, ...params)
    RAM.push(parse(diffRAM, -2))
    HeapTotal.push(parse(diffHeapTotal, -2))
    HeapUsed.push(parse(diffHeapUsed, -2))
    External.push(parse(diffExternal, -4))
    CPU.push(diffCPU)
    Time.push(diffTime)
    sleep(2000);
  }
  const res = {
    RAM: _.mean(RAM) + ' MB',
    HeapTotal: _.mean(HeapTotal) + 'MB',
    HeapUsed: _.mean(HeapUsed) + 'MB',
    External: _.mean(External) + 'Byte',
    CPU: _.mean(CPU) + 'ms',
    SpendTime: _.mean(Time) + 'ms',
  }
  console.log(callback.name, ': ', res);
}
