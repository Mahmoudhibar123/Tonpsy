class UsersController < ApplicationController

  def index
    @users = User.with_attached_avatar.all
    render json: { status: 500, errors: ['no users found'] } unless @users
  end

  def show
    @user = User.unscoped.find_by(id: params[:id])
    render json: { status: 500, errors: ['user not found'] } unless @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      if user_params[:role] == 1
        @user.update_attribute(:active, false)
        Doctor.create(user_id: @user.id)
      end
      CommonMailer.welcome_email(@user).deliver_now

      login!
    else
      render json: { status: 500, errors: @user.errors.full_messages }
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user && authorized_user?
      if @user.update(user_params)
        @user.update_doc_image(user_params[:avatar]) if @user.role == "THERAPIST"
      else
        render json: { status: 500, errors: @user.errors.full_messages }
      end
    else
      render json: { status: 401, errors: ['verify credentials and try again or signup'] }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :first_name, :last_name, :address, :description, :avatar, :role)
  end
end
