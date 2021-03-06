import { RECEIVE_DOGS, RECEIVE_DOG, CLEAR_DOGS } from "../actions/dog_actions";
import { RECEIVE_SINGLE_USER } from "../actions/users_actions";
import { RECEIVE_PET_SHOP } from "../actions/pet_shops_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
const defaultState = {};

const dogsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DOGS:
      return Object.assign({}, newState, action.dogs);
    case RECEIVE_SINGLE_USER:
      let singleUserDogs = {};
      action.singleUser.authored_dog_breeds.forEach(
        (dog) => singleUserDogs[dog.id] = dog
      );
      return Object.assign({}, newState, singleUserDogs);
    case RECEIVE_PET_SHOP:
      let dogs = {};
      Object.values(action.petShop)[0].dog_breeds.forEach(
        (dog) => dogs[dog.id] = dog
      );
      return Object.assign({}, newState, dogs);
    case RECEIVE_CURRENT_USER:
      let currentUserDogs = {};
      action.currentUser.authored_dog_breeds.forEach(
        dog => currentUserDogs[dog.id] = dog
      );
      return Object.assign({}, newState, currentUserDogs);
    case RECEIVE_DOG:
      const {
        id,
        breed_name,
        description,
        fluff_by_vol,
        int_cute_unit,
        pet_shop_id,
        author_id,
        image_url,
        checkins_count,
        average_checkin_rating,
        checkin_ids
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
          image_url,
          checkins_count,
          average_checkin_rating,
          checkin_ids
        }
      };
      return Object.assign({}, newState, newDog);
    case CLEAR_DOGS:
      return {};
    default:
      return state;
  }
};

export default dogsReducer;
