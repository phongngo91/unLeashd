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

require 'rails_helper'

RSpec.describe Checkin, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
