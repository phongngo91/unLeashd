json.set! @petShop.id do
  json.extract! @petShop, :id, :pet_shop_name, :city, :state
  json.image_url asset_path("pet_shops/#{@petShop.image_url}.png")

  json.dog_breeds @petShop.dog_breeds do |dog|
    json.extract! dog, :id, :breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id
    json.image_url url_for(dog.photo) if dog.photo.attached?
  end
end