require 'open-uri'

ActiveRecord::Base.transaction do
    Checkin.destroy_all
    DogBreed.destroy_all
    PetShop.destroy_all
    User.destroy_all

    phong = User.create!(username: "phong", password: "hunter2", 
        email: "phong@aa.com", first_name: "phong", last_name: "ngo")
    tommy = User.create!(username: "tommy", password: "hunter2", 
        email: "tommy@aa.com", first_name: "tommy", last_name: "Smith")
    demo_user = User.create!(username: "demo_user", password: "hunter2", 
        email: "demo_user@aa.com", first_name: "John", last_name: "Doe")
    hacker_man = User.create!(username: "hackerman", password: "hunter2", 
        email: "hackerman@aa.com", first_name: "Sarah", last_name: "Silverman")
    lovelace = User.create!(username: "lovelace", password: "hunter2", 
        email: "lovelace@aa.com", first_name: "Drew", last_name: "Barrymore")

    petco = PetShop.create!(pet_shop_name: "Petco", 
        city: "Queens", state: "NY")
    petsmart = PetShop.create!(pet_shop_name: "PetSmart", 
        city: "Manhattan", state: "NY")
    whiskers = PetShop.create!(pet_shop_name: "Whiskers Holistic", 
        city: "Queens", state: "NY")
    fairmount = PetShop.create!(pet_shop_name: "Fairmount Pet Shoppe", 
        city: "Philadelphia", state: "PA")
    baltimore = PetShop.create!(pet_shop_name: "Baltimore Pet Shoppe", 
        city: "Philadelphia", state: "PA")
    world_wide = PetShop.create!(pet_shop_name: "World Wide Aquarium & Pets", 
        city: "Philadelphia", state: "PA")
    petland = PetShop.create!(pet_shop_name: "Petland Village of East Side", 
        city: "Pittsburgh", state: "PA")
    pet_valu = PetShop.create!(pet_shop_name: "Pet Valu", 
        city: "Pittsburgh", state: "PA")

    petco_file = File.open('app/assets/images/pet_shops/petco.png')
    petco.photo.attach(io: petco_file, filename: 'petco.png')

    petsmart_file = File.open('app/assets/images/pet_shops/petsmart.png')
    petsmart.photo.attach(io: petsmart_file, filename: 'petsmart.png')

    whiskers_file = File.open('app/assets/images/pet_shops/whiskers.png')
    whiskers.photo.attach(io: whiskers_file, filename: 'whiskers.png')

    fairmount_file = File.open('app/assets/images/pet_shops/fairmount.png')
    fairmount.photo.attach(io: fairmount_file, filename: 'fairmount.png')

    baltimore_file = File.open('app/assets/images/pet_shops/baltimore.png')
    baltimore.photo.attach(io: baltimore_file, filename: 'baltimore.png')

    world_wide_file = File.open('app/assets/images/pet_shops/world_wide.png')
    world_wide.photo.attach(io: world_wide_file, filename: 'world_wide.png')

    petland_file = File.open('app/assets/images/pet_shops/petland.png')
    petland.photo.attach(io: petland_file, filename: 'petland.png')

    pet_valu_file = File.open('app/assets/images/pet_shops/pet_valu.png')
    pet_valu.photo.attach(io: pet_valu_file, filename: 'pet_valu.png')
    

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
    # file1 = open('https://unleashd-dev.s3.amazonaws.com/86275943_190618488848511_8318908248518295552_n.jpg')
    # demo_dog1.photo.attach(io: file1, filename: 'chihuahua.jpg')

    # demo_dog2 = DogBreed.second
    # file2 = open('https://unleashd-dev.s3.amazonaws.com/86275943_190618488848511_8318908248518295552_n.jpg')
    # demo_dog2.photo.attach(io: file2, filename: 'dachshund.jpg')
    
end

