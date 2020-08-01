json.status 200

json.partial! 'users/user', user: @user

json.user do
  json.active  @user.active
end
