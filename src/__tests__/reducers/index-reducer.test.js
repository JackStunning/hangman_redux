import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import gameControlVisibleReducer from '../../reducers/game-control-visible-reducer';
import gamePlayReducer from '../../reducers/game-play-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe ('rootReducer', () => {
  test ('Should return default state if no action type is recognized', () => {
    expect (rootReducer({}, {type: null})).toEqual({
      gameControlVisible: false,
      gamePlay: {}
    })
  });
});