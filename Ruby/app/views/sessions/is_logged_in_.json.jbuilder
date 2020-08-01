json.logged_in true

json.user do
  json.id               @user.id
  json.username         @user.username
  json.email            @user.email
  json.role             @user.role
  json.first_name       @user.first_name
  json.last_name        @user.last_name
  json.address          @user.address
  json.description      @user.description
  json.created_at       @user.created_at
  json.updated_at       @user.updated_at


  if @user.avatar.attached?
    json.image url_for(@user.avatar)
  end

  if @user.role == "THERAPIST"
    json.doctor do
      json.id           @user.doctor.id
      json.name         @user.doctor.name
      json.description  @user.doctor.description
      json.fees         @user.doctor.fees

      json.specialists @user.doctor.specialists do |specialist|
        json.id         specialist.id
        json.title      specialist.title
      end

      json.treatments @user.doctor.treatments do |treatment|
        json.id         treatment.id
        json.name       treatment.name
      end

      if @user.doctor.certificate.attached?
        json.certificate      url_for(@user.doctor.certificate)
      end
    end
  end
end
