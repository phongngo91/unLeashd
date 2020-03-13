import { RECEIVE_SEARCHED_USERS } from "../actions/users_actions";

const defaultState = [];

const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
      return action.searchedUsers;
    default:
      return state;
  }
};

export default usersReducer;
