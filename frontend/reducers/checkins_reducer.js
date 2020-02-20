import {
  RECEIVE_CHECKINS,
  RECEIVE_CHECKIN,
  REMOVE_CHECKIN,
  CLEAR_CHECKINS
} from "../actions/checkin_actions";
import { RECEIVE_PET_SHOP } from "../actions/pet_shops_actions";
import { RECEIVE_DOG } from "../actions/dog_actions";
import { RECEIVE_SINGLE_USER } from "../actions/users_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const checkinsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUserCheckins = {};
      action.currentUser.checkins.forEach(
        checkin => (currentUserCheckins[checkin.id] = checkin)
      );
      return Object.assign({}, newState, currentUserCheckins);
    case RECEIVE_SINGLE_USER:
      let singleUserCheckins = {};
      action.singleUser.checkins.forEach(
        checkin => (singleUserCheckins[checkin.id] = checkin)
      );
      return Object.assign({}, newState, singleUserCheckins);
    case RECEIVE_CHECKINS:
      return Object.assign({}, newState, action.checkins);
    case RECEIVE_PET_SHOP:
      let checkins = {};
      Object.values(action.petShop)[0].checkins.forEach(
        checkin => (checkins[checkin.id] = checkin)
      );
      return Object.assign({}, newState, checkins);
    case RECEIVE_CHECKIN:
      const newCheckinObj = { [action.checkin.id]: action.checkin };
      return Object.assign({}, newState, newCheckinObj);
    case RECEIVE_DOG:
      let DogCheckins = {};
      Object.values(action.dog)[0].checkins.forEach(
        checkin => (DogCheckins[checkin.id] = checkin)
      );
      return Object.assign({}, newState, DogCheckins);
    case REMOVE_CHECKIN:
      delete newState[action.checkinId];
      return newState;
    case CLEAR_CHECKINS:
      return {};
    default:
      return state;
  }
};

export default checkinsReducer;
