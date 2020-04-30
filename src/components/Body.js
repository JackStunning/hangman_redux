import React from "react";
import GameControl from "./Game/GameControl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as c from '../actions/ActionTypes'

function Body(props) {

  const handleToggleGameControl = () => {
    const { dispatch } = props;
    const action = {
      type: c.TOGGLE_GAME_CONTROL
    };
    dispatch(action);
    const action2 = {
      type: c.GENERATE_RANDOM_WORD
    };
    dispatch(action2);
  };

  const setVisibility = () => {
    if (props.gameControlVisible) {
      return <GameControl />
    } else {
      return <button id="NewGameButton" onClick={handleToggleGameControl}>New Game</button>
    }
  }

  return(
    <React.Fragment>
      {setVisibility()}
    </React.Fragment>
  )
}

Body.propTypes = {
  gameControlVisible: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    gameControlVisible: state.gameControlVisible
  }
}

export default connect(mapStateToProps)(Body);