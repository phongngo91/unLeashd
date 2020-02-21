json.set! @petShop.id do
  json.extract! @petShop, :id, :pet_shop_name, :city, :state
  json.image_url url_for(@petShop.photo) if @petShop.photo.attached?

  json.dog_breeds @petShop.dog_breeds do |dog|
    json.extract! dog, :id, :breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id
    json.image_url url_for(dog.photo) if dog.photo.attached?
  end

  json.dog_breed_ids @petShop.dog_breeds.ids.sort.reverse
  json.checkins_count @petShop.checkins.where("rating > 0").length
  json.average_checkin_rating @petShop.checkins.where("rating > 0").average(:rating)
  json.dog_count @petShop.dog_breeds.length
  json.checkin_ids @petShop.checkins.ids.sort.reverse

  json.checkins @petShop.checkins do |checkin|
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
end