class SessionsController < ApplicationController

  def create
    @user = User.unscoped.active.find_by(username: session_params[:username])

    if @user && @user.authenticate(session_params[:password])
      login!
    else
      render json: { status: 401, errors: ['no such user', 'verify credentials and try again or signup'] }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      @user = current_user
      respond_to do |format|
        format.json
        render "sessions/is_logged_in_"
      end
    else
      render json: { logged_in: false, message: 'no such user' }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  private

  def session_params
    params.require(:user).permit(:username, :email, :password)
  end
end
