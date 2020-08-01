class Admin::UsersController < AdminController
  def index
    if params[:role] == '0' || params[:role] == '1'
      @users = User.with_attached_avatar.includes(doctor: [:specialists, :treatments]).where(role: params[:role]).order(:id)
      render json: { status: 500, errors: ['no users found'] } unless @users
    else
      render json: { status: 500, errors: ['unauthorised'] }
    end
  end

  def update_status
    @user = User.find_by(id: params[:id])
    @user.update_attribute(:active, params[:active])
  end
end
