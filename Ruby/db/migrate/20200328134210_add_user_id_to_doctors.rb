class AddUserIdToDoctors < ActiveRecord::Migration[6.0]
  def change
    add_reference :doctors, :user, null: false, foreign_key: true

    # So that we can have doctors that are not associated to users
    change_column_null :doctors, :user_id, true
  end
end
