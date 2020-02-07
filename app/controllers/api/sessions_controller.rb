class Api::SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:username],params[:password])
      if @user 
        login!(@user)
        render :create
      else
        render json: ["Invalid username or password"], status: 422
      end
    end
  
    def destroy 
      if logged_in?
        logout!
        render json: {}
      else
        render json: ['No user to log out'], status: 422
      end
    end
  end
  