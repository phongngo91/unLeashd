import * as APIUtil from "../utils/pet_shops_api_util";

export const RECEIVE_PET_SHOPS = "RECEIVE_PET_SHOPS";
export const RECEIVE_PET_SHOP = "RECEIVE_PET_SHOP";

const receivePetShops = petShops => {
  return {
    type: RECEIVE_PET_SHOPS,
    petShops
  };
};

const receivePetShop = petShop => {
  return {
    type: RECEIVE_PET_SHOP,
    petShop
  };
};

export const fetchPetShop = (petShopId) => dispatch => (
  APIUtil.fetchPetShop(petShopId).then(
    (petShop)=> dispatch(receivePetShop(petShop))
  )
);

export const fetchPetShops = () => dispatch => (
  APIUtil.fetchPetShops().then(
    (petShops)=> dispatch(receivePetShops(petShops))
  )
);
