import React from "react";
import PropTypes from "prop-types";

function GamePlay(props){
  return (
    <React.Fragment>
      <div className="imageSection">
        <img id="hangmanImage" src={props.image} alt="add hangmanImage here" />
      </div>
      <div className="stats">
        <h2>Previous Guesses:</h2>
        <p>{props.guesses}</p>
      </div>
      <div className="blankSection">
        <h2>Guess the word!</h2>
        <h3><strong>{props.blanks}</strong></h3>
      </div>
      <div className="messageSection">
        <h4><em>{props.message}</em></h4>
      </div>
    </React.Fragment>
  );
}

GamePlay.propTypes = {
  image: PropTypes.string,
  guesses: PropTypes.string,
  blanks: PropTypes.string,
  message: PropTypes.string,
};

export default GamePlay;