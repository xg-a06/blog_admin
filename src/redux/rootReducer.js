import { combineReducers } from 'redux';

const defaultState = {
  value: 'write....',
  list: [
    'hello',
    'world',
    'nihao'
  ]
}

export default combineReducers({
  viewer: (state = defaultState) => {
    return state
  },
});
