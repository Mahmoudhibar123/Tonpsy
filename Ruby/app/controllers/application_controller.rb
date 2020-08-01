class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :set_default_format

  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!

  def set_default_format
    request.format = 'json'
  end

  def login!
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.unscoped.find(session[:user_id]) if session[:user_id]
  end

  def authorized_user?
    @user == current_user
  end

  def logout!
    session.clear
  end
end
