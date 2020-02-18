class RemoveImageUrlFromPetShop < ActiveRecord::Migration[5.2]
  def change
    remove_column :pet_shops, :image_url
  end
end
