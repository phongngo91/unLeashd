import * as APIUtil from '../utils/checkins_api_util';

export const RECEIVE_CHECKINS = "RECEIVE_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const RECEIVE_CHECKIN_ERRORS = "RECEIVE_CHECKIN_ERRORS";
export const CLEAR_CHECKIN_ERRORS = "CLEAR_CHECKIN_ERRORS";
export const REMOVE_CHECKIN = "REMOVE_CHECKIN";

const receiveCheckin = checkin => {
  return {
    type: RECEIVE_CHECKIN,
    checkin
  };
};

const receiveCheckins = checkins => {
  return {
    type: RECEIVE_CHECKINS,
    checkins
  };
};

const receiveCheckinErorrs = errors => {
  return {
    type: RECEIVE_CHECKIN_ERRORS,
    errors
  };
};

export const clearCheckinErrors = () => {
  return {
    type: CLEAR_CHECKIN_ERRORS
  };
};

export const removeCheckin = (checkinId) => {
  return {
    type: REMOVE_CHECKIN,
    checkinId
  };
};

export const createCheckin = formData => dispatch =>{
  return APIUtil.createCheckin(formData).then(
    checkin => dispatch(receiveCheckin(checkin)),
    errors => dispatch(receiveCheckinErorrs(errors.responseJSON))
  );
};

export const fetchCheckins = (page) => dispatch => {
  return APIUtil.fetchCheckins(page).then(
    checkins => dispatch(receiveCheckins(checkins)),
    errors => dispatch(receiveCheckinErorrs(errors.responseJSON))
  );
};

export const fetchCheckin = checkinId => dispatch => {
  return APIUtil.fetchCheckin(checkinId).then(
    checkin => dispatch(receiveCheckin(checkin)),
    errors => dispatch(receiveCheckinErorrs(errors.responseJSON))
  );
};

export const deleteCheckin = checkinId => {
  return APIUtil.deleteCheckin(checkinId).then(
    checkin => dispatch(removeCheckin(checkin.id))
  );
};