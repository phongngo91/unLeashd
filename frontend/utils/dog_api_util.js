export const createDog = (formData) => {
  return $.ajax({
    url: '/api/dog_breeds/',
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const fetchDogs = () => {
  return $.ajax({
    url: '/api/dog_breeds/',
    method: "GET"
  });
};

export const fetchDog = (dogId) => {
  return $.ajax({
    url: `/api/dog_breeds/${dogId}`,
    method: "GET"
  });
};

export const editDog = dog => {
  return $.ajax({
    method: "PATCH",
    url: `/api/dog_breeds/${dog.id}`,
    data: dog,
    contentType: false,
    processData: false
  });
};