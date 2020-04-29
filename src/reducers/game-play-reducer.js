import * as c from '../actions/ActionTypes'

export default (state = {}, action) => {
  switch (action.type){
    case c.GENERATE_RANDOM_WORD:
      return !state;
    default:
      return state;
  }
};