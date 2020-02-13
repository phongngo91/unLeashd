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
