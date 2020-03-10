class AddForeignKeyToUsers < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :users, :users, column: :friend_id
  end
end
