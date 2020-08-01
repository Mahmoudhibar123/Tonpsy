json.status true

json.bookings @bookings  do |booking|
  json.id             booking.id
  json.book_date      booking.book_date
  json.status         booking.status
  json.timeslot       booking.timeslot

  json.doctor do
    json.id           booking.doctor.id
    json.name         booking.doctor.name
    json.description  booking.doctor.description
    json.fees         booking.doctor.fees

    if booking.doctor.avatar.attached?
      json.image      url_for(booking.doctor.avatar)
    end

    if booking.doctor.certificate.attached?
      json.certificate      url_for(booking.doctor.certificate)
    end

    json.treatments booking.doctor.treatments do |treatment|
      json.id         treatment.id
      json.name       treatment.name
    end

    json.specialists booking.doctor.specialists do |specialist|
      json.id         specialist.id
      json.title      specialist.title
    end
  end

  json.partial! 'users/user', user: booking.user if booking.user
end