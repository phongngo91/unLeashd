import { RECEIVE_DOGS } from "../actions/dog_actions";
import { RECEIVE_SINGLE_USER } from "../actions/users_actions";

const defaultState = {};

const dogsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DOGS:
      return action.dogs;
    case RECEIVE_SINGLE_USER:
      // to track all dog breeds
      // return Object.assign({}, newState, action.singleUser.authored_dog_breeds);
      // to track just dog breeds of a single user
      return action.singleUser.authored_dog_breeds;
    default:
      return state;
  }
};

export default dogsReducer;
