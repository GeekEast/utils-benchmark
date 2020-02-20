import _ from "lodash";

const initData = (name, length) => _.keyBy(_.map(_.range(0, length), id => {
  return { key: id, name: name, value: 0 };
}), 'key');

const a = initData('a', 90);
const b = initData('b', 90);
const c = initData('c', 90);
const d = initData('d', 90);

const set = (data, start, end) => {
  for (let i = start; i < end; i++) {
    data[i].value = 1;
  }
}

set(a, 0, 90);
set(b, 0, 57);
set(c, 0, 15);
set(c, 69, 90);
set(d, 0, 15);
set(d, 66, 72);
set(d, 80, 90);



const a_res: any = [];
const b_res: any = [];
const c_res: any = [];
const d_res: any = [];

for (let j = 0; j < 90; j++) {
  const a_value = a[j].value;
  const b_value = b[j].value;
  const c_value = c[j].value;
  const d_value = d[j].value;
  const res = 3.05 * 4 / (a_value + b_value + c_value + d_value);
  if (a_value === 1) a_res.push(res)
  if (b_value === 1) b_res.push(res)
  if (c_value === 1) c_res.push(res)
  if (d_value === 1) d_res.push(res)
}

const a_price = _.sum(a_res);
const b_price = _.sum(b_res);
const c_price = _.sum(c_res);
const d_price = _.sum(d_res);

console.log(a_price);
console.log(b_price);
console.log(c_price);
console.log(d_price);
console.log(a_price + b_price + c_price + d_price);




