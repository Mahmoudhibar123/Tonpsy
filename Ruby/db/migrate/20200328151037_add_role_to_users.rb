class AddRoleToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :role, :int, null: false, default: 0
  end
end
