import {combineReducers} from 'redux';

const rootReducer = combineReducer({
  gamePlayVisible = gamePlayVisibleReducer,
})