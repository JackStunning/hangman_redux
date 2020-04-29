import * as c from '../actions/ActionTypes'

export default (state = {}, action) => {
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
      console.log("RANDOM WORD", stateGenerateRandomWord.randomWord);
      return stateGenerateRandomWord;
    
    case c.GUESS_INCORRECT:
      const newStats = state.stats.push(state.guessLetter);
      const stateGuessIncorrect = {
        ...state,
        incorrectAmount: (state.incorrectAmount+1),
        image: state.imagePaths[state.incorrectAmount+1],
        stats: newStats,
        messages: state.messages["incorrect"],
      };
      return stateGuessIncorrect;
    
    case c.GUESS_CORRECT:
      const blankArray = state.blanks;
      const newBlanksArray = function() {
        let arr2 = [];
        for (let j = 0; j < state.randomWord.length; j++){
          if (state.randomWord[j] === state.guessLetter){
            arr2.push(j);
          }
        }
        for (let k = 0; k < blankArray.length; k++){
          blankArray.splice(arr[k], 1, state.guessLetter);
        }
        return blankArray;
      };
      const stateGuessCorrect = {
        ...state,
        blanks: newBlanksArray(),
      };
      return stateGuessCorrect;
      
    default:
      return state;
  }
};