@petShops.each do |petShop|
  json.set! petShop.id do
    json.extract! petShop, :id, :pet_shop_name, :city, :state
    json.image_url url_for(petShop.photo) if petShop.photo.attached?
  end
end
