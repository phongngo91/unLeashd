class AddNullConstraintToUsersName < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :first_name, false
    change_column_null :users, :last_name, false
  end
end
