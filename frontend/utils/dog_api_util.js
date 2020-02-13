export const createDog = (dog) => {
  return $.ajax({
    url: '/api/dog_breeds/',
    method: "POST",
    data: { dog }
  });
};

export const fetchDogs = () => {
  return $.ajax({
    url: '/api/dog_breeds/',
    method: "GET"
  });
};
