import * as APIUtil from "../utils/dog_api_util";

export const RECEIVE_DOG = "RECEIVE_DOG";
export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_DOG_ERRORS = "RECEIVE_DOG_ERRORS";

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

// export const clearDogErrors ;

export const createDog = formData => dispatch => {
  return APIUtil.createDog(formData).then(
    dog => dispatch(receiveDog(dog)),
    errors => dispatch(receiveDogErrors(errors.responseJSON))
  );
};

export const fetchDogs = () => dispatch => {
  return APIUtil.fetchDogs().then(
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
