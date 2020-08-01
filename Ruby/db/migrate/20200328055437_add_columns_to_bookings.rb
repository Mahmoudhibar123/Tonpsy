class AddColumnsToBookings < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :timeslot, :string
    add_column :bookings, :status, :integer, null: false, default: 0
  end
end
