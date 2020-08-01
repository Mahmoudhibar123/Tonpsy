class AddFeesToDoctors < ActiveRecord::Migration[6.0]
  def change
    add_column :doctors, :fees, :decimal, null: false, default: 0
  end
end
