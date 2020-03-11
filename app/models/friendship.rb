# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  friend_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord

  validates :user_id, uniqueness: { scope: :friend_id}

  belongs_to :user
  belongs_to :friend,
    class_name: :User,
    foreign_key: :friend_id
end
