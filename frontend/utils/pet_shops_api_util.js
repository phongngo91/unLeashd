export const fetchPetShops = () => {
  return $.ajax({
    url: '/api/pet_shops/',
    method: "GET"
  });
};

export const fetchPetShop = (petShopId) => {
  return $.ajax({
    url: `/api/pet_shops/${petShopId}`,
    method: "GET"
  });
};
