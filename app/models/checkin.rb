# == Schema Information
#
# Table name: checkins
#
#  id           :bigint           not null, primary key
#  author_id    :integer          not null
#  dog_breed_id :integer          not null
#  rating       :integer
#  checkin_body :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Checkin < ApplicationRecord
  validates :author_id, :dog_breed_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :dog_breed,
    class_name: :DogBreed,
    foreign_key: :dog_breed_id,
    primary_key: :id

  has_one :pet_shop,
    through: :dog_breed

  has_one_attached :photo
end
