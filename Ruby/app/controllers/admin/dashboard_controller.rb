class Admin::DashboardController < AdminController
  def index
    bookings_count = Booking.count
    total_sales = Payment.placed.inject(0){|sum, n| sum+n.amount}.to_i
    total_customers = User.with_role(0).count
    total_therapists = User.with_role(1).count

    render json: { status: 200,
                   bookings_count: bookings_count,
                   total_sales: total_sales,
                   total_customers: total_customers,
                   total_therapists: total_therapists }
  end
end
