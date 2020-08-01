class SpecialistsController < ApplicationController
  def create
    @doctor = Doctor.find(params[:doctor_id])
    @specialist = @doctor.specialists.new(specialist_params)

    if @specialist.save
      render json: { status: :created, specialist: @specialist }
    else
      render json: { status: 500, errors: @specialist.errors.full_messages }
    end

  end

  private

  def specialist_params
    params.require(:specialist).permit(:title)
  end
end
