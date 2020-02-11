import { RECEIVE_PET_SHOPS } from "../actions/pet_shops_actions";

const defaultState = {};

const petShopsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PET_SHOPS:
      return action.petShops;
    default:
      return state;
  }
};

export default petShopsReducer;
