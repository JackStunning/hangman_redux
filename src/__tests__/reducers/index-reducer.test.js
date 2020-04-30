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
      gamePlay: gamePlayReducer(undefined, {type:null})
    })
  });

  test('Check that initial state of gameControlVisibleReducer matches root reducer', () => {
    expect(store.getState().gameControlVisible).toEqual(gameControlVisibleReducer(undefined, {type:null}))
  });

  test('Check that initial state of gamePlayReducer matches root reducer', () => {
    expect(store.getState().gamePlay).toEqual(gamePlayReducer(undefined, {type:null}))
  });

  test('Check that toggled state of gameControlVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_GAME_CONTROL
    }
    store.dispatch(action);
    expect(store.getState().gameControlVisible).toEqual(gameControlVisibleReducer(undefined, action))
  });

  test('Check that random word generated tate of gamePlayReducer mandroot reducer contained in list of possible words', () => {
    let expected;
    let result;
    const action = {
      type: c.GENERATE_RANDOM_WORD
    }
    store.dispatch(action);
    (store.getState().gamePlay.wordsList.includes(store.getState().gamePlay.randomWord)) ? expected = true : expected = false;
    (gamePlayReducer(undefined, action).wordsList.includes(gamePlayReducer(undefined, action).randomWord)) ? result = true : result = false;
    expect(expected).toEqual(result);
  });

  test('Test Guess Correct state in gamePlayReducer matches root reducer', () => {
    const action = {
      type: c.GUESS_CORRECT
    }
    store.dispatch(action);
    expect(store.getState().gamePlay).toEqual(gamePlayReducer(undefined, action));
  });
});