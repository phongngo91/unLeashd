import {
  RECEIVE_CHECKINS,
  RECEIVE_CHECKIN,
  REMOVE_CHECKIN
} from "../actions/checkin_actions";
import {
  RECEIVE_PET_SHOP
} from "../actions/pet_shops_actions";
import {
  RECEIVE_DOG
} from '../actions/dog_actions';

const checkinsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CHECKINS:
      return Object.assign({}, newState, action.checkins);
    case RECEIVE_PET_SHOP:
      return Object.values(action.petShop)[0].checkins;
    case RECEIVE_DOG:
      return Object.values(action.dog)[0].checkins;
    case REMOVE_CHECKIN:
      delete newState[action.checkinId];
      return newState;
    default:
      return state;
  }
};

export default checkinsReducer;
