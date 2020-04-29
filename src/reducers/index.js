import {combineReducers} from 'redux';
import gameControlVisibleReducer from './game-control-visible-reducer'

const rootReducer = combineReducers({
  gameControlVisible: gameControlVisibleReducer,
});

export default rootReducer;