class TreatmentsController < ApplicationController
  def create
    @doctor = Doctor.find(params[:doctor_id])
    @treatment = @doctor.treatments.new(treatment_params)

    if @treatment.save
      render json: { status: :created, treatment: @treatment }
    else
      render json: { status: 500, errors: @treatment.errors.full_messages }
    end
  end

  def destroy
    @treatment = Treatment.find(params[:id])
    @treatment.destroy

    render json: { status: :ok }
  end

  private

  def treatment_params
    params.require(:treatment).permit(:name)
  end
end
