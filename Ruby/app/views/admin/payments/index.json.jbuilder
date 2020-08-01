json.status 200

json.payments @payments do |payment|
  json.id               payment.id
  json.booking_id       payment.booking_id
  json.amount           payment.amount
  json.status           payment.status
  json.payment_date     payment.payment_date
  json.card_type        payment.card_type
  json.transaction_id   payment.transaction_id
  json.currency         payment.currency
  json.description      payment.description
  json.created_at       payment.created_at
  json.updated_at       payment.updated_at

  json.partial! 'users/user', user: payment.booking.user
end
