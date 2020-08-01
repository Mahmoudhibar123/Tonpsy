class BookingsController < ApplicationController

  def index
    if current_user
      @bookings = current_user.bookings
    else
      render json: {
        status: 401,
        errors: ['no such user']
      }
    end
  end

  def create
    @booking = current_user.bookings.new(booking_params)

    if @booking.save
      doctor = Doctor.find_by(id: @booking.doctor_id)
      user = User.find_by(id: doctor.user_id)
      appointedby = User.find_by(id: @booking.user_id)
      CommonMailer.booking_email(user,appointedby,@booking).deliver_now
      render json: {
        status: :created,
        booking: @booking
      }
    else
      render json: {
        status: 500,
        booking: @booking.errors.full_messages
      }
    end
  end

  def update_status
    @booking = Booking.find(params[:id])
    @booking.update(status: params[:status].to_i)
    
# ------------------
    doctor = Doctor.find_by(id: @booking.doctor_id)
    user = User.find_by(id: doctor.user_id)
    appointedby = User.find_by(id: @booking.user_id)
    if params[:status].to_i == 1
      CommonMailer.booking_accept_email(user,appointedby,@booking).deliver_now
    else
      CommonMailer.booking_reject_email(user,appointedby,@booking).deliver_now
    end
# ---------------------
    render json: {
      status: :ok,
      booking: @booking
    }
  end

  private

  def booking_params
    params.require(:booking).permit(:doctor_id, :book_date, :timeslot)
  end
end
