import * as c from '../../actions/ActionTypes';
import * as a from './../../actions/index';

describe('game control actions', () => {
  it('toggleGameControl should create TOGGLE_GAME_CONTROL action', () => {
    expect(a.toggleGameControl()).toEqual({
      type: c.TOGGLE_GAME_CONTROL
    });
  });

  it('generateRandomWord should create GENERATE_RANDOM_WORD action', () => {
    expect(a.generateRandomWord()).toEqual({
      type: c.GENERATE_RANDOM_WORD
    });
  });

  it('guessIncorrect should create GUESS_INCORRECT action', () => {
    expect(a.guessIncorrect()).toEqual({
      type: c.GUESS_INCORRECT
    });
  });

  it('guessCorrect should create GUESS_CORRECT action', () => {
    expect(a.guessCorrect()).toEqual({
      type: c.GUESS_CORRECT
    });
  });
});