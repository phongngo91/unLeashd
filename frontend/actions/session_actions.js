import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => {
  return {
  type: RECEIVE_CURRENT_USER,
  currentUser
};};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
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
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
