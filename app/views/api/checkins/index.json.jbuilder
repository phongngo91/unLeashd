@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :author_id, :dog_breed_id
    json.extract! checkin, :rating, :checkin_body, :created_at

    json.image_url url_for(checkin.photo) if checkin.photo.attached?
    json.author do
      json.extract! checkin.author, :first_name, :last_name
      json.image_url url_for(checkin.author.photo) if checkin.author.photo.attached?
    end
    json.dog_breed do 
      json.extract! checkin.dog_breed, :breed_name
      json.image_url url_for(checkin.dog_breed.photo) if checkin.dog_breed.photo.attached?
    end
    json.pet_shop checkin.pet_shop.pet_shop_name
    json.pet_shop_id checkin.pet_shop.id
  end
end
