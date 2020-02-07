class ApplicationController < ActionController::Base
    #CELLL
    helper_method :current_user, :ensure_logged_in?, :logged_in?
  
    def current_user
      return nil unless session[:session_token]
      @current_user = User.find_by(session_token: session[:session_token])
  
    end
  
    def login!(user)
      session[:session_token] = user.session_token
    end
  
    def logout!
      current_user.reset_session_token!
      session[:session_token] = nil 
    end
  
    def logged_in?
      !!current_user
    end
  
    private
    def ensure_logged_in?
      redirect_to new_session_url unless logged_in?
    end
  end
  