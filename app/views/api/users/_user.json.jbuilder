# json.id user.id
# json.username user.username

json.extract! user, :id, :username, :first_name, :last_name
# json.image_url  url_for(user.photo) if user.photo.attached?
json.authored_dog_breeds user.authored_dogs do |authored_dog|
  json.extract! authored_dog, :id, :breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id
  json.image_url url_for(authored_dog.photo) if authored_dog.photo.attached?

end

json.friend_ids user.friend_ids

if user.photo.attached?
  json.image_url url_for(user.photo)
else
  json.image_url asset_path('default_avatar.png')
end

json.authored_dogs user.authored_dogs.ids.sort.reverse

json.checkins_count user.checkins.where("rating > 0").length
json.average_checkin_rating user.checkins.where("rating > 0").average(:rating)
json.checkin_ids user.checkins.ids.sort.reverse

json.checkins user.checkins do |checkin|
  json.extract! checkin, :id, :author_id, :dog_breed_id, :rating, :checkin_body, :created_at
  json.image_url url_for(checkin.photo) if checkin.photo.attached?
  json.author do
    json.extract! checkin.author, :first_name, :last_name
    if checkin.author.photo.attached?
      json.image_url url_for(checkin.author.photo)
    else
      json.image_url asset_path('default_avatar.png')
    end
  end
  
  json.dog_breed do 
    json.extract! checkin.dog_breed, :breed_name
    json.image_url url_for(checkin.dog_breed.photo) if checkin.dog_breed.photo.attached?
  end
  json.pet_shop checkin.pet_shop.pet_shop_name
  json.pet_shop_id checkin.pet_shop.id
end