class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|

      t.integer  :user_id
      t.integer  :doctor_id
      t.datetime :book_date
      
      t.timestamps
    end
  end
end
