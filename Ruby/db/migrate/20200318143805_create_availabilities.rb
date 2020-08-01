class CreateAvailabilities < ActiveRecord::Migration[6.0]
  def change
    create_table :availabilities do |t|

      t.integer :doctor_id
      t.string  :name
      
      t.timestamps
    end
  end
end
