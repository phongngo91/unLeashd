import { RECEIVE_DOGS } from "../actions/dog_actions";

const defaultState = {};

const dogsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DOGS:
      return action.dogs;
    default:
      return state;
  }
};

export default dogsReducer;
