class Admin::BookingsController < AdminController
  def index
    @bookings = Booking.order(:id)
  end
end
