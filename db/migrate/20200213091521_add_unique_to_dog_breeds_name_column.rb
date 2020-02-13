class AddUniqueToDogBreedsNameColumn < ActiveRecord::Migration[5.2]
  def change
    add_index :dog_breeds, :breed_name, unique: true
  end
end
