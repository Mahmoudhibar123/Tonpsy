class CreateDayTimes < ActiveRecord::Migration[6.0]
  def change
    create_table :day_times do |t|

      t.integer :availability_id
      t.string  :hour_time
      
      t.timestamps
    end
  end
end
