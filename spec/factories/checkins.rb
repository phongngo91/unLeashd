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

FactoryBot.define do
  factory :checkin do
    author_id { "" }
    dog_breed_id { "" }
    rating { "" }
    checkin_body { "MyString" }
  end
end
