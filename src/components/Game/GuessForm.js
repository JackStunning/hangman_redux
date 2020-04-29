import React from "react";

function GuessForm(){
  return (
    <React.Fragment>
      <form>
        <input
          type='text'
          name='guess'
          placeholder='Guess letter' /><br />
        <button className="btn btn-primary" type='submit'>Guess!</button>
      </form>
    </React.Fragment>
  );
}

export default GuessForm;