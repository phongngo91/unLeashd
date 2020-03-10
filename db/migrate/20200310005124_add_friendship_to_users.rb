class AddFriendshipToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :friend_id, :integer
  end
end
