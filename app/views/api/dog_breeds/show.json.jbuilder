json.set! @dog.id do
  json.extract! @dog, :id, :breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id
  json.image_url url_for(@dog.photo) if @dog.photo.attached?
end
