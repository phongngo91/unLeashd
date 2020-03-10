class DeleteFriendIdColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :friend_id
  end
end
