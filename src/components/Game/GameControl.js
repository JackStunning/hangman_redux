import React from "react";
import GamePlay from './GamePlay';
import GuessForm from './GuessForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../../actions';

class GameControl extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <React.Fragment>
        <GamePlay />
        <GuessForm />
      </React.Fragment>
    )
  }
}

GameControl.propTypes = {

}

const mapStateToProps = state => {
  return {

  }
}

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;