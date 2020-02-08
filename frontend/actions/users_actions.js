import * as APIUtil from "../utils/users_api_util";
import { receiveErrors } from './session_actions';

export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

const receiveSingleUser = singleUser => {
  return {
    type: RECEIVE_SINGLE_USER,
    singleUser
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
