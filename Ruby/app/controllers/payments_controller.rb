class PaymentsController < ApplicationController
  def create
    begin
      payment = Payment.create(payment_params)
      payment.create_payment(params[:token], payment_params)
# ------------------
      @booking = Booking.find_by(id: payment.booking_id)
      doctor = Doctor.find_by(id: @booking.doctor_id)
      user = User.find_by(id: doctor.user_id)
      appointedby = User.find_by(id: @booking.user_id)
      # Fordr
      CommonMailer.payment_sucess_therapist_email(user,appointedby,@booking).deliver_now
      # forpatiet
      CommonMailer.payment_sucess_user_email(appointedby,user,@booking).deliver_now
# ---------------------
      render json: { status: :created, payment: payment.reload }
    rescue Stripe::CardError => e
      render json: { status: :unprocessable_entity, errors: e.message }
    rescue StandardError => e
      render json: { status: 500, errors: e.message }
    end
  end

  private

  def payment_params
    params.require(:payment).permit(:booking_id, :amount, :currency, :description)
  end
end
