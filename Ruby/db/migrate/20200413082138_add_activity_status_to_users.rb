class AddActivityStatusToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :active, :bool, null: false, default: true
  end
end
