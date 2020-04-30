import React from "react";
import GamePlay from './GamePlay';
import GuessForm from './GuessForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as c from '../../actions/ActionTypes';

function GameControl(props) {

  const handleClickGuess = (guessLetter) => {
    const { dispatch, randomWord } = props;
    const actionGuessCorrect = {
      type: c.GUESS_CORRECT
    };
    const actionGuessIncorrect = {
      type: c.GUESS_INCORRECT
    };
    (randomWord.includes(guessLetter)) ? dispatch(actionGuessCorrect) : dispatch(actionGuessIncorrect);
  }

  return(
    <React.Fragment>
      <h2>Enter your guess!</h2>
      <GamePlay 
        blanks={props.blanks}
        image={props.image}
        displayImage={props.displayImage} 
        stats={props.stats}
        displayMessage={props.displayMessage}/>
      <GuessForm onGuess={handleClickGuess} />
    </React.Fragment>
  )
}


GameControl.propTypes = {
  wordsList: PropTypes.arrayOf(PropTypes.string),
  imagePaths: PropTypes.arrayOf(PropTypes.string),
  displayImage: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.string),
  blanks: PropTypes.arrayOf(PropTypes.string),
  messages: PropTypes.string,
  displayMessage: PropTypes.string,
  guessLetter: PropTypes.string,
  randomWord: PropTypes.string,
  incorrectAmount: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    wordsList: state.gamePlay.wordsList,
    imagePaths: state.gamePlay.imagePaths,
    displayImage: state.gamePlay.displayImage,
    stats: state.gamePlay.stats,
    blanks: state.gamePlay.blanks,
    messages: state.gamePlay.messages,
    displayMessage: state.gamePlay.displayMessage,
    guessLetter: state.gamePlay.guessLetter,
    randomWord: state.gamePlay.randomWord,
    incorrectAmount: state.gamePlay.incorrectAmount,
  }
}

export default connect(mapStateToProps)(GameControl);



// class GameControl extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   handleGeneratingRandomWord = () => {
//     const { dispatch } = this.props;
//     const action = {
//       type: c.GENERATE_RANDOM_WORD
//     }
//     dispatch(action);
//   }

//   handleClickGuess = () => {
//     const { dispatch } = this.props;
    
//   }

//   render(){
//     this.handleGeneratingRandomWord();
//     console.log("PROPS IN GAMECONTROL", this.props);
//     // <GuessForm onGuess = {this.handleClickGuess}
//     return(
//       <React.Fragment>
//         <h2>Enter your guess!</h2>
//         <GamePlay blanks={this.props.blanks} />
//         <GuessForm />
//       </React.Fragment>
//     )
//   }
// }

// GameControl.propTypes = {
//   wordsList: PropTypes.arrayOf(PropTypes.string),
//   imagePaths: PropTypes.arrayOf(PropTypes.string),
//   displayImage: PropTypes.string,
//   stats: PropTypes.arrayOf(PropTypes.string),
//   blanks: PropTypes.arrayOf(PropTypes.string),
//   messages: PropTypes.string,
//   displayMessage: PropTypes.string,
//   guessLetter: PropTypes.string,
//   randomWord: PropTypes.string,
//   incorrectAmount: PropTypes.number,
// }

// const mapStateToProps = state => {
//   return {
//     wordsList: state.wordsList,
//     imagePaths: state.imagePaths,
//     displayImage: state.displayImage,
//     stats: state.stats,
//     blanks: state.blanks,
//     messages: state.messages,
//     displayMessage: state.displayMessage,
//     guessLetter: state.guessLetter,
//     randomWord: state.randomWord,
//     incorrectAmount: state.incorrectAmount,
//   }
// }

// GameControl = connect(mapStateToProps)(GameControl);

// export default GameControl;