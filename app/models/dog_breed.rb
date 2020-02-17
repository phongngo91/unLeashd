# == Schema Information
#
# Table name: dog_breeds
#
#  id            :bigint           not null, primary key
#  breed_name    :string           not null
#  description   :string           not null
#  fluff_by_vol  :integer          not null
#  int_cute_unit :integer          not null
#  pet_shop_id   :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class DogBreed < ApplicationRecord
  validates :breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id, presence: true
  
  has_one_attached :photo

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :pet_shop,
    class_name: :PetShop,
    foreign_key: :pet_shop_id,
    primary_key: :id

  has_many :checkins,
    class_name: :Checkin,
    foreign_key: :dog_breed_id,
    primary_key: :id
  
end
