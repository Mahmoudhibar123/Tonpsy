class CreateTreatments < ActiveRecord::Migration[6.0]
  def change
    create_table :treatments do |t|

      t.integer :doctor_id
      t.string :name
      
      t.timestamps
    end
  end
end
