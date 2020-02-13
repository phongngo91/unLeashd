import * as APIUtil from "../utils/dog_api_util";

export const RECEIVE_DOG = "RECEIVE_DOG";
export const RECEIVE_DOGS = "RECEIVE_DOGS";

const receiveDogs = dogs => {
  return {
    type: RECEIVE_DOGS,
    dogs
  };
};

const receiveDog = dog => {
  return {
    type: RECEIVE_DOG,
    dog
  };
};

export const createDog = formData => dispatch => (
  APIUtil.createDog(formData).then(
    dog => dispatch(receiveDog(dog))
  )
);

export const fetchDogs = () => dispatch => (
  APIUtil.fetchDogs().then(
    (dogs)=> dispatch(receiveDogs(dogs))
  )
);