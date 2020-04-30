import React from "react";
import PropTypes from "prop-types";

function GuessForm(props){
  function handleGuessFormSubmission(event){
    event.preventDefault();
    props.onGuess({
      guessLetter: event.target.guess.value,
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleGuessFormSubmission}>
        <input
          type='text'
          name='guess'
          maxLength={1}
          placeholder='Guess letter' 
          required />
        <br />
        <button className="btn btn-primary" type='submit'>Guess!</button>
      </form>
    </React.Fragment>
  );
}

GuessForm.propTypes = {
  onGuess: PropTypes.func,
};

export default GuessForm;