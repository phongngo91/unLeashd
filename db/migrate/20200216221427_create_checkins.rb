class CreateCheckins < ActiveRecord::Migration[5.2]
  def change
    create_table :checkins do |t|
      t.integer :author_id, null: false
      t.integer :dog_breed_id, null: false
      t.integer :rating
      t.string :checkin_body, null: false

      t.timestamps
    end
    add_foreign_key :checkins, :users, column: :author_id
    add_foreign_key :checkins, :dog_breeds
  end
end
