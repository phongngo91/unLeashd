require 'open-uri'

ActiveRecord::Base.transaction do
    User.destroy_all
    PetShop.destroy_all
    DogBreed.destroy_all 
    
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

    # DogBreed.create!({
    #     breed_name: "Chihuahua",
    #     description: "The Chihuahua is the smallest breed of dog, and is named after the Mexican state of Chihuahua.",
    #     fluff_by_vol: 15,
    #     int_cute_unit: 33,
    #     pet_shop_id: (PetShop.first.id),
    #     author_id: (User.first.id)
    # })

    # DogBreed.create!({
    #     breed_name: "Dachshund",
    #     description: "The dachshund, also known as the wiener dog or sausage dog is a short-legged, long-bodied, hound-type dog breed. They may be smooth-haired, wire-haired, or long-haired.",
    #     fluff_by_vol: 25,
    #     int_cute_unit: 55,
    #     pet_shop_id: (PetShop.first.id),
    #     author_id: (User.second.id)
    # })



    # demo_dog1 = DogBreed.first
    # file1 = open('https://unleashd-pro.s3.amazonaws.com/84193110_477077912968192_6156515128356372480_n.jpg')
    # demo_dog1.photo.attach(io: file1, filename: 'chihuahua.jpg')

    # demo_dog2 = DogBreed.second
    # file2 = open('https://unleashd-pro.s3.amazonaws.com/86275943_190618488848511_8318908248518295552_n.jpg')
    # demo_dog2.photo.attach(io: file2, filename: 'dachshund.jpg')
    
end

