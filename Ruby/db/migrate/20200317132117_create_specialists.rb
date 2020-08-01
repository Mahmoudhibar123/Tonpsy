class CreateSpecialists < ActiveRecord::Migration[6.0]
  def change
    create_table :specialists do |t|

      t.integer :doctor_id
      t.string :title
      
      t.timestamps
    end
  end
end
