json.user do
  json.id             user.id
  json.username       user.username
  json.email          user.email
  json.role           user.role
  json.first_name     user.first_name
  json.last_name      user.last_name
  json.address        user.address
  json.description    user.description
  json.created_at     user.created_at
  json.updated_at     user.updated_at


  if user.avatar.attached?
    json.image        url_for(user.avatar)
  end

  if user.role == "THERAPIST"
    json.doctor_id    user.doctor.id
  end
end
