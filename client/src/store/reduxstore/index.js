import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
const userReducer = (state = {}, action) => {
  const {type, data} = action;
  switch (type) {
    case 'ADD':
      return {...data};
    case 'SUB':
      return {};
    default:
      return state;
  }
};

const store = createStore(userReducer, applyMiddleware(thunk));
export default store;
