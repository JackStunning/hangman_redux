import gameControlReducer from '../../reducers/gameControlReducer';

describe ("gameControlReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(gameControlReducer(false, {type: null})).toEqual(false);
  });
});