class AddForeignKeyToDogs < ActiveRecord::Migration[5.2]
  def change    
    add_foreign_key :dog_breeds, :users, column: :author_id
    add_foreign_key :dog_breeds, :pet_shops

  end
end
