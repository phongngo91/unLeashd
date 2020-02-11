export const fetchPetShops = () => {
  return $.ajax({
    url: '/api/pet_shops/',
    method: "GET"
  });
};
