class AddSuperuserToUsers < ActiveRecord::Migration[6.0]
  def up
    User.create(username: "superuser123", email: "superuser123@thecode.com", password: "password123", role: 2)
  end

  def down
    User.unscoped.find_by(username: "superuser123")&.destroy
  end
end
