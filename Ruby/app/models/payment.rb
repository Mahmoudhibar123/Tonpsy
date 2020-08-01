class Payment < ApplicationRecord
  OPEN = 0
  PLACED = 1
  CANCELLED = 2

  belongs_to :booking

  validates :status, numericality: { only_integer: true }, inclusion: { in: [OPEN, PLACED, CANCELLED] }

  scope :placed, -> { where(status: PLACED) }

  def create_payment(token, payment_params)
    user = booking.user

    ActiveRecord::Base.transaction do
      customer = Stripe::Customer.create(email: user.email, source: token)
      user.update_attribute(:stripe_id, customer.id)

      charge = Stripe::Charge.create(
        customer:     customer.id,
        amount:       payment_params[:amount],
        description:  payment_params[:description],
        currency:     payment_params[:currency],
        metadata:     { booking_id: payment_params[:currency] }
      )

      update!(status: PLACED, payment_date: Time.zone.now, transaction_id: charge.id)
      booking.update_attribute(:status, 3)
    end
  end
end
