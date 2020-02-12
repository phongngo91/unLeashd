class CreateDogBreeds < ActiveRecord::Migration[5.2]
  def change
    create_table :dog_breeds do |t|
      t.string :breed_name, null: false
      t.string :description, null: false
      t.integer :fluff_by_vol, null: false
      t.integer :int_cute_unit, null: false
      t.integer :pet_shop_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end
