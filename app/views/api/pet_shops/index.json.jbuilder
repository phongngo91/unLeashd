@petShops.each do |petShop|
  json.set! petShop.id do
    json.extract! petShop, :id, :pet_shop_name, :city, :state
    json.image_url asset_path("pet_shops/#{petShop.image_url}.png")
  end
end
