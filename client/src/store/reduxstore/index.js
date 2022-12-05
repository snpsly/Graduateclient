import {createStore, applyMiddleware, combineReducers} from 'redux';

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
const addressReducer = (
  state = {Homelongitude: 0, Homelatitude: 0, address: '', clickaddress: ''},
  action,
) => {
  const {type, data} = action;

  switch (type) {
    case 'ADDhomeaddress':
      return {
        Homelongitude: data.longitude,
        Homelatitude: data.latitude,
        address: data.address,
        clickaddress: '',
      };
    case 'clickmap':
      return {
        ...state,
        clickaddress: data,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  userReducer,
  addressReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
