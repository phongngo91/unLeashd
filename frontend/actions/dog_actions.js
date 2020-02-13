import * as APIUtil from "../utils/dog_api_util";

export const RECEIVE_DOGS = "RECEIVE_DOGS";

const receiveDogs = dogs => {
  return {
    type: RECEIVE_DOGS,
    dogs
  };
};

export const fetchDogs = () => dispatch => (
  APIUtil.fetchDogs().then(
    (dogs)=> dispatch(receiveDogs(dogs))
  )
);