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
      return Object.assign({}, newState, action.dogs);
    case RECEIVE_SINGLE_USER:
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
        image_url,
        checkins_count,
        average_checkin_rating
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
          average_checkin_rating
        }
      };
      return Object.assign({}, newState, newDog);
    default:
      return state;
  }
};

export default dogsReducer;
