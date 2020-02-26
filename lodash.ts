
import _ from 'lodash';

const state = {
  comments: {
    data: {
      "1": { key: "1", number: 1 },
      "2": { key: "2", number: 2 },
      "3": { key: "3", number: 3 }
    },
    isLoading: false
  }
};

const newState = { ...state };

const newState2 = {
  ...state,
  comments: {
    ...state.comments,
    data: { ...state.comments.data, "4": { key: "4", number: 4 } }
  }
};


const newData = _.get(state, ['comments', "data"])

const filtered = _.filter(newData, (val, key) => {
  return key === "2";
})[0]

const picked = _.pick(newData, "2")['2']

console.log(filtered === state.comments.data['2'])
console.log(picked === state.comments.data['2'])



