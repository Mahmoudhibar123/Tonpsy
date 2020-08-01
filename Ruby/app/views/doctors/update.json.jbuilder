json.doctor do
  json.id   @doctor.id
  json.name @doctor.name
  json.description @doctor.description
  json.fees @doctor.fees

  if @doctor.avatar.attached?
    json.image url_for(@doctor.avatar)
  end

  if @doctor.certificate.attached?
    json.certificate url_for(@doctor.certificate)
  end

  json.specialists @doctor.specialists do |specialist|
    json.id    specialist.id
    json.title specialist.title
  end

  json.treatments @doctor.treatments do |treatment|
    json.id   treatment.id
    json.name treatment.name
  end

  json.available @array do |day|

    json.name (Date.today + day).strftime("%a")
    json.date (Date.today + day).to_formatted_s(:short)
    json.times  @array2 do |time|
      json.time  time
    end

  end
end