import * as APIUtil from "../utils/dog_api_util";

export const RECEIVE_DOG = "RECEIVE_DOG";
export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_DOG_ERRORS = "RECEIVE_DOG_ERRORS";
export const CLEAR_DOGS = "CLEAR_DOGS";
export const CLEAR_DOG_ERRORS = "CLEAR_DOG_ERRORS";

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

const receiveDogErrors = errors => {
  return {
    type: RECEIVE_DOG_ERRORS,
    errors
  };
};

export const clearDogErrors = () => {
  return {
    type: CLEAR_DOG_ERRORS
  };
};

export const clearDogs = () =>{
  return {
    type: CLEAR_DOGS
  };
};

export const createDog = formData => dispatch => {
  return APIUtil.createDog(formData).then(
    dog => dispatch(receiveDog(dog)),
    errors => dispatch(receiveDogErrors(errors.responseJSON))
  );
};

export const fetchDogs = (page) => dispatch => {
  return APIUtil.fetchDogs(page).then(
    dogs => dispatch(receiveDogs(dogs)),
    errors => dispatch(receiveDogErrors(errors.responseJSON))
  );
};

export const fetchDog = dogId => dispatch => {
  return APIUtil.fetchDog(dogId).then(
    dog => dispatch(receiveDog(dog)),
    errors => dispatch(receiveDogErrors(errors.responseJSON))
  );
};

export const editDog = dog => dispatch =>{
  return APIUtil.editDog(dog).then(
    dog => dispatch(receiveDog(dog)),
    errors => dispatch(receiveDogErrors(errors.responseJSON))
  );
};