import {
  RECEIVE_PET_SHOPS,
  RECEIVE_PET_SHOP
} from "../actions/pet_shops_actions";
import { RECEIVE_DOG } from "../actions/dog_actions";

const defaultState = {};

const petShopsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PET_SHOPS:
      return action.petShops;
    case RECEIVE_PET_SHOP:
      // const newPetShop = {
      //   [action.petShop.id]: action.petShop
      // };
      // const dogIds = action.petShop.dog_breeds.map(dog => {
      //   return dog.id;
      // });
      // newPetShop[dog_breeds] = dogIds;
      return Object.assign({}, newState, action.petShop);
    case RECEIVE_DOG:
      const pet_shop = Object.values(action.dog)[0].pet_shop;
      return Object.assign({}, newState, { [pet_shop.id]: pet_shop });
    default:
      return state;
  }
};

export default petShopsReducer;
