json.set! @dog.id do
  json.extract! @dog, :id, :breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id
  json.image_url url_for(@dog.photo) if @dog.photo.attached?
  json.author @dog.author
  json.pet_shop @dog.pet_shop

  json.checkins_count @dog.checkins.length
  json.average_checkin_rating @dog.checkins.average(:rating)

  json.checkins @dog.checkins do |checkin|
    json.extract! checkin, :id, :author_id, :dog_breed_id, :rating, :checkin_body
    json.image_url url_for(checkin.photo) if checkin.photo.attached?
    json.author do
      json.extract! checkin.author, :first_name, :last_name
    end
    
    json.dog_breed do 
      json.extract! checkin.dog_breed, :breed_name
    end

    json.pet_shop checkin.pet_shop.pet_shop_name
    json.pet_shop_id checkin.pet_shop.id
  end
end
