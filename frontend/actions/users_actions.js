import * as APIUtil from "../utils/users_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";

const receiveSingleUser = singleUser => {
  return {
    type: RECEIVE_SINGLE_USER,
    singleUser
  };
};

const receiveSearchedUsers = searchedUsers => {
  return {
    type: RECEIVE_SEARCHED_USERS,
    searchedUsers
  };
};

export const fetchUser = userId => dispatch => {
  return APIUtil.fetchUser(userId).then(
    user => {
      return dispatch(receiveSingleUser(user));
    },
    errors => {
      dispatch(receiveErrors(errors.responseJSON));
    }
  );
};

export const searchUsers = name => dispatch => {
  return APIUtil.searchUsers(name).then(users => {
    return dispatch(receiveSearchedUsers(users));
  }
  );
};
