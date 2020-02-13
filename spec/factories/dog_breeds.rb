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

FactoryBot.define do
  factory :dog_breed do
    
  end
end
