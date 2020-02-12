import { RECEIVE_PET_SHOPS, RECEIVE_PET_SHOP } from "../actions/pet_shops_actions";

const defaultState = {};

const petShopsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PET_SHOPS:
      return action.petShops;
    case RECEIVE_PET_SHOP:
      return Object.assign({}, newState, action.petShop);
    default:
      return state;
  }
};

export default petShopsReducer;
