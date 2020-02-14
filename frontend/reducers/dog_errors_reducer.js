import {
  RECEIVE_DOG_ERRORS
} from "../actions/dog_actions";

const dogErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_DOG_ERRORS:
          return action.errors;
      default:
          return state;
  }
};

export default dogErrorsReducer;
