@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :author_id, :dog_breed_id, :rating, :checkin_body
    json.image_url url_for(checkin.photo) if checkin.photo.attached?
    json.author do
      json.extract! checkin.author, :first_name, :last_name
    end
    json.dog_breed do 
      json.extract! checkin.dog_breed, :breed_name
    end
    json.pet_shop checkin.pet_shop.pet_shop_name
  end
end
