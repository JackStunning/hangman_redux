import {combineReducers} from 'redux';
import gameControlVisibleReducer from './game-control-visible-reducer'
import gamePlayReducer from './game-play-reducer';

const rootReducer = combineReducers({
  gameControlVisible: gameControlVisibleReducer,
  gamePlay: gamePlayReducer
});

export default rootReducer;