# == Schema Information
#
# Table name: pet_shops
#
#  id            :bigint           not null, primary key
#  pet_shop_name :string           not null
#  city          :string           not null
#  state         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class PetShop < ApplicationRecord
  validates :pet_shop_name, :city, :state, presence: true

  has_many :dog_breeds,
    class_name: :DogBreed,
    foreign_key: :pet_shop_id,
    primary_key: :id,
    dependent: :destroy

  has_many :checkins,
    through: :dog_breeds

  has_one_attached :photo

end
