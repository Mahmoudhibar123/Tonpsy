class Admin::PaymentsController < AdminController
  def index
    @payments = Payment.includes(booking: [user: [:avatar_attachment, :doctor], doctor: :avatar_attachment]).placed
  end
end
