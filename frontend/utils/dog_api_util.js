export const fetchDogs = () => {
  return $.ajax({
    url: '/api/dog_breeds/',
    method: "GET"
  });
};
