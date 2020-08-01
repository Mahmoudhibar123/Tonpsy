class DoctorsController < ApplicationController
  before_action :check_doctor, only: [:bookings, :update]
  before_action :get_time, only: [:index, :show]

  def index
    @doctors = Doctor.with_attached_avatar.with_attached_certificate.includes(:specialists, :treatments).order(id: :asc)

    if params[:fees] && params[:fees] != nil && params[:fees] != ""
      @doctors = @doctors.where("fees >= ?", params[:fees])
    end

    if params[:treatment] && params[:treatment] != nil && params[:treatment] != ""
      @doctors = @doctors.with_treatment_like(params[:treatment])
    end
  end

  def show
    @doctor = Doctor.find(params[:id])
  end

  def bookings
    @bookings = current_doctor.bookings
  end

  def update
    @doctor = Doctor.find(params[:id])

    render json: { status: 500, errors: @doctor.errors.full_messages } unless @doctor.update(doctor_params)
  end

  def upload_certificate
    @doctor = Doctor.find(params[:id])
    if @doctor.update(doctor_cert_params)
      @user = @doctor.user
      respond_to do |format|
        format.json
        render "sessions/is_logged_in_"
      end
    else
      render json: { status: 500, errors: @doctor.errors.full_messages }
    end
  end

  def total_payments
    render json: { status: 200, total_payment: current_doctor.total_payments, total_bookings: current_doctor.bookings.count }
  end

  private

  def get_time
    @array = [0,1,2,3,4]
    @array2 = [
      "09:00", "09:30", "10:00", "11:00", "11:30", "12:00", "13:00", "13:30",
      "14:00", "14:30", "15:00", "15:30", "16:00"
    ]
  end

  def check_doctor
    unless current_doctor
      render json: { status: :unauthorized, errors: ["not a therapist"] }
    end
  end

  def current_doctor
    @doctor ||= current_user&.doctor
  end

  def doctor_params
    params.require(:doctor).permit(:name, :description, :avatar, :fees)
  end

  def doctor_cert_params
    params.require(:doctor).permit(:certificate)
  end
end
