import {
  RECEIVE_CHECKIN_ERRORS,
  CLEAR_CHECKIN_ERRORS
} from "../actions/checkin_actions";

const checkinErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_CHECKIN_ERRORS:
          return action.errors;
      case CLEAR_CHECKIN_ERRORS:
          return [];
      default:
          return state;
  }
};

export default checkinErrorsReducer;
