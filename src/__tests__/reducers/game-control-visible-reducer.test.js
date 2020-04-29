import gameControlVisibleReducer from '../../reducers/game-control-visible-reducer';
import * as c from '../../actions/ActionTypes';

describe ("gameControlVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(gameControlVisibleReducer(false, {type: null})).toEqual(false);
  });

  test('Should toggle game control visibility to true', () => {
    expect(gameControlVisibleReducer(false, {type: c.TOGGLE_GAME_CONTROL })).toEqual(true);
  });
  
});