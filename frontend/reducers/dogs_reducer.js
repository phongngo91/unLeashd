import { RECEIVE_DOGS, RECEIVE_DOG } from "../actions/dog_actions";
import { RECEIVE_SINGLE_USER } from "../actions/users_actions";
import { RECEIVE_PET_SHOP } from "../actions/pet_shops_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
const defaultState = {};

const dogsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DOGS:
      return action.dogs;
    case RECEIVE_SINGLE_USER:
      // to track all dog breeds
      // return Object.assign({}, newState, action.singleUser.authored_dog_breeds);
      // to track just dog breeds of a single user
      // debugger
      return action.singleUser.authored_dog_breeds;
    case RECEIVE_PET_SHOP:
      return Object.values(action.petShop)[0].dog_breeds;
    case RECEIVE_CURRENT_USER:
      return action.currentUser.authored_dog_breeds;
    case RECEIVE_DOG:
      const {
        id,
        breed_name,
        description,
        fluff_by_vol,
        int_cute_unit,
        pet_shop_id,
        author_id,
        image_url
      } = Object.values(action.dog)[0];
      const newDog = {
        [id]: {
          id,
          breed_name,
          description,
          fluff_by_vol,
          int_cute_unit,
          pet_shop_id,
          author_id,
          image_url
        }
      };
      return Object.assign({}, newState, newDog);
    default:
      return state;
  }
};

export default dogsReducer;
