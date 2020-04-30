import gamePlayReducer from '../../reducers/game-play-reducer';
import * as c from '../../actions/ActionTypes';

describe ("gamePlayReducer", () => {

  let action;
  const testWordsList = ["epicodus", "programming", "react", "coding", "redux", "javascript"];
  const imagePaths = ["https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png", "https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png", "https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png", "https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png", "https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png", "https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png", "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png"];
  const testState = {
    gameControlVisible: false,
    wordsList: testWordsList,
    image: imagePaths,
    displayImage: "",
    stats: [],
    blanks: [],
    messages: { 
      win: "You Win!", 
      lose: "You Lose!",
      correct: "Correct! Letter appeared in the word.",
      incorrect: "Incorrect! Letter is not in the word."
    },
    displayMessage: "",
    guessLetter: "",
    randomWord: "",
    incorrectAmount: 0,
  }
  const testRandomWord = "epicodus";

  test('Should return default state if no action type is recognized', () => {
    expect(gamePlayReducer({}, {type: null})).toEqual({});
  });

  test('Should generate a random word from word list', () => {
    action = {type: c.GENERATE_RANDOM_WORD };
    expect(testWordsList).toContain((gamePlayReducer(testState, action)).randomWord);
  });

  test('Should generate the correct number of underscores in blanks according to number of letters in random word', () => {
    action = {type: c.GENERATE_RANDOM_WORD };
    const runTestState = (gamePlayReducer(testState, action));
    expect(runTestState.blanks.length).toEqual(runTestState.randomWord.length);
  });

  test('A correct guess letter should replace underscore in the correct index of blanks array', () => {
    action = { type: c.GUESS_CORRECT };
    const testGuessLetter = "o";
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter,
      blanks: ["_","_","_","_","_","_","_","_"]
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).blanks[4]).toEqual("o");
  });

  test('An incorrect guess letter should be pushed to stats array', () => {
    action = { type: c.GUESS_INCORRECT };
    const testGuessLetter = "a";
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter,
      blanks: ["_","_","_","_","_","_","_","_"]
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).stats[0]).toContain("a");
  });

  test('An incorrect guess should increment the number of incorrectAmount', () => {
    action = { type: c.GUESS_INCORRECT };
    const testGuessLetter = "a";
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).incorrectAmount).toEqual(1);
  });

  test('An incorrect guess should display the correct image', () => {
    action = { type: c.GUESS_INCORRECT };
    const testGuessLetter = "a";
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter,
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).displayImage).toEqual("https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png");
  });

  test('When the incorrectAmount reaches 1, it should display the correct message', () => {
    action = { type: c.GUESS_INCORRECT };
    const testIncorrectAmount = 0;
    const testGuessLetter = "a";
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter,
      incorrectAmount: testIncorrectAmount
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).displayMessage).toEqual("Incorrect! Letter is not in the word.");
  });

  test('When the incorrectAmount reaches 6, it should display the correct message player loses', () => {
    action = { type: c.GUESS_INCORRECT };
    const testIncorrectAmount = 5;
    const testGuessLetter = "a";
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter,
      incorrectAmount: testIncorrectAmount
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).displayMessage).toEqual("You Lose!");
  });

  test('When a guess is correct, it should display the correct message', () => {
    action = { type: c.GUESS_CORRECT };
    const testIncorrectAmount = 0;
    const testGuessLetter = "o";
    const testBlanks = ["_","_","_","_","_","_","_","_"]
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter,
      incorrectAmount: testIncorrectAmount,
      blanks: testBlanks
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).displayMessage).toEqual("Correct! Letter appeared in the word.");
  });

  test('When a guess completes all the blanks, it should display the correct message player wins', () => {
    action = { type: c.GUESS_CORRECT };
    const testIncorrectAmount = 0;
    const testGuessLetter = "o";
    const testBlanks = ["e","p","i","c","_","d","u","s"]
    const testStateWithRandomWord = {
      ...testState,
      randomWord: testRandomWord,
      guessLetter: testGuessLetter,
      incorrectAmount: testIncorrectAmount,
      blanks: testBlanks
    }
    expect(gamePlayReducer(testStateWithRandomWord, action).displayMessage).toEqual("You Win!");
  });
  
});