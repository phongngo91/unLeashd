import * as APIUtil from "../utils/pet_shops_api_util";

export const RECEIVE_PET_SHOPS = "RECEIVE_PET_SHOPS";

const receivePetShops = petShops => {
  return {
    type: RECEIVE_PET_SHOPS,
    petShops
  };
};

export const fetchPetShops = () => dispatch => (
  APIUtil.fetchPetShops().then(
    (petShops)=> dispatch(receivePetShops(petShops))
  )
);
