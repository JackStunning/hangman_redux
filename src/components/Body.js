import React from "react";
import GameControl from "./Game/GameControl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as a from '../actions';

function Body(props) {

  const handleToggleGameControl = () => {
    const { dispatch } = props;
    const action = a.toggleGameControl();
    dispatch(action);
  };
  console.log("PROPS IN BODY:", props);

  return(

    <React.Fragment>
      <button onClick={handleToggleGameControl}>New Game</button>
      <GameControl />
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