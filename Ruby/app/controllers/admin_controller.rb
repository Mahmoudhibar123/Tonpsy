class AdminController < ApplicationController
  before_action :check_admin

  def check_admin
    render json: { status: :unauthorized, errors: ['not an admin'] } unless current_user&.role == "SUPERADMIN"
  end
end
