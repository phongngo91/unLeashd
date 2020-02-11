class CreatePetShops < ActiveRecord::Migration[5.2]
  def change
    create_table :pet_shops do |t|
      t.string :pet_shop_name, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :image_url, null: false

      t.timestamps
    end

    add_index :pet_shops, :pet_shop_name, unique: true
  end


end
