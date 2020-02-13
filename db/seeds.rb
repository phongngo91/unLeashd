require 'open-uri'

ActiveRecord::Base.transaction do
    User.destroy_all 
    
    User.create!([
        {username: "phong", password: "hunter2", email: "phong@aa.com", first_name: "phong", last_name: "ngo"},
        {username: "tommy", password: "hunter2", email: "tommy@aa.com", first_name: "tommy", last_name: "doe"},
        {username: "demo_user", password: "hunter2", email: "demo_user@aa.com", first_name: "userFirstName", last_name: "userLastName"}
    ])

    PetShop.create!([
        {pet_shop_name: "Petco", city: "Queens", state: "NY", image_url: "1"},
        {pet_shop_name: "PetSmart", city: "Manhattan", state: "NY", image_url: "2"},
        {pet_shop_name: "Whiskers Holistic", city: "Queens", state: "NY", image_url: "3"},
        {pet_shop_name: "Fairmount Pet Shoppe", city: "Philadelphia", state: "PA", image_url: "4"},
        {pet_shop_name: "Baltimore Pet Shoppe", city: "Philadelphia", state: "PA", image_url: "5"},
        {pet_shop_name: "World Wide Aquarium & Pets", city: "Philadelphia", state: "PA", image_url: "6"},
        {pet_shop_name: "Petland Village of East Side", city: "Pittsburgh", state: "PA", image_url: "7"},
        {pet_shop_name: "Pet Valu", city: "Pittsburgh", state: "PA", image_url: "8"}
    ])

    DogBreed.create!({
        breed_name: "Chihuahua",
        description: "The Chihuahua is the smallest breed of dog, and is named after the Mexican state of Chihuahua.",
        fluff_by_vol: 15,
        int_cute_unit: 33,
        pet_shop_id: (PetShop.first.id),
        author_id: (User.first.id)
    })

    demo_dog = DogBreed.first

    file = open('https://unleashd-dev.s3.amazonaws.com/chihuahua-1356758_960_720.jpg')
    demo_dog.photo.attach(io: file, filename: 'chihuahua.jpg')
    
end

