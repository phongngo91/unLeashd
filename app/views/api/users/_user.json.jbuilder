json.id user.id
json.username user.username
# json.image_url  url_for(user.photo) if user.photo.attached?
json.authored_dog_breeds user.authored_dogs do |authored_dog|
  json.extract! authored_dog, :id, :breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id
  json.image_url url_for(authored_dog.photo) if authored_dog.photo.attached?
end