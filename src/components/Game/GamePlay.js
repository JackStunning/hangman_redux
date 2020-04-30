import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

function GamePlay(props){

  const imageStatsClass = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr' 
  }
  console.log("PROPS IN GAMEPLAY", props);
  console.log(props.blanks);
  console.log(props.blanks.forEach(element => console.log(element)));



  return (
    <React.Fragment>
      <div className={imageStatsClass}>
        <div className="imageSection">
          <img id="hangmanImage" src={props.displayImage} alt="add hangmanImage here" />
        </div>
        <div className="stats">
          <h2>Previous Guesses:</h2>
          <p>{props.stats}</p>
        </div>
      </div>
      <div className="blankSection">
        <h2>Guess the word!</h2>
        <h2>{props.blanks.join(" ")}</h2>
      </div>
      <div className="messageSection">
        <h4><em>{props.displayMessage}</em></h4>
      </div>
    </React.Fragment>
  );
}

GamePlay.propTypes = {
  displayImage: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.string),
  blanks: PropTypes.arrayOf(PropTypes.string),
  displayMessage: PropTypes.string,
  // guessLetter: PropTypes.string,
  // randomWord: PropTypes.string,
  // incorrectAmount: PropTypes.number,
}

export default GamePlay;