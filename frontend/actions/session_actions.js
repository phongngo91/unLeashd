import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => {
  return {
  type: RECEIVE_CURRENT_USER,
  currentUser
};};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => (
  APIUtil.logIn(user).then(
    userPayload => {
      return dispatch(receiveCurrentUser(userPayload));
    },
    errors => {
      dispatch(receiveErrors(errors.responseJSON));
    })
);

export const logout = () => dispatch => (
  APIUtil.logOut().then(
    ()=> dispatch(logoutCurrentUser()), 
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtil.signUp(user).then(
    userPayload => dispatch(receiveCurrentUser(userPayload)),
    errors => {
      return (
        dispatch(receiveErrors(errors.responseJSON)));
    })
);
