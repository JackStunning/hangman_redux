import * as c from '../actions/ActionTypes';
import InitialState from '../initialState';

export default (state = InitialState, action) => {
  switch (action.type){
    case c.GENERATE_RANDOM_WORD:
      const randomIndex = Math.floor(Math.random() * state.wordsList.length);
      const randomWordGenerated = state.wordsList[randomIndex];
      const generateBlanksArray = function() {
        let arr = [];
        for (let i = 0; i < randomWordGenerated.length; i++) {
          arr.push("_");
        }
        return arr;
      };

      const stateGenerateRandomWord = {
        ...state,
        randomWord: randomWordGenerated,
        blanks: generateBlanksArray()
      };
      return stateGenerateRandomWord;
  
    case c.GUESS_INCORRECT:
      const newStats = function() {
        let arr3 = state.stats;
        if(!arr3.includes(state.guessLetter)){
          arr3.push(state.guessLetter);
        }
        arr3.sort();
        return arr3;
      }
      const stateGuessIncorrect = {
        ...state,
        incorrectAmount: (state.incorrectAmount+1),
        displayImage: state.image[state.incorrectAmount+1],
        stats: newStats(),
        displayMessage: (state.incorrectAmount+1 === 6) ? state.messages["lose"] : state.messages["incorrect"]
      };
      return stateGuessIncorrect;
    
    case c.GUESS_CORRECT:
      let isWordComplete = false;
      const blankArray = state.blanks;
      const newBlanksArray = function() {
        let arr2 = [];
        for (let j = 0; j < state.randomWord.length; j++){
          if (state.randomWord[j] === state.guessLetter){
            arr2.push(j); //Push array index that matches guess
          }
        }
        for (let k = 0; k < blankArray.length; k++){
          blankArray.splice(arr2[k], 1, state.guessLetter); //Replace blank at indexes with guessed letter
        }
        if (!blankArray.includes("_")) {
          isWordComplete = true;
        }
        return blankArray;
      };
      const stateGuessCorrect = {
        ...state,
        blanks: newBlanksArray(),
        displayMessage: (isWordComplete) ? state.messages["win"] : state.messages["correct"]
      };
      return stateGuessCorrect;
      
    default:
      return state;
  }
};