class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)
      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.includes(:authored_dogs).find_by(id: params[:id])
      if @user
        render :show
      else
        render json: ["Did not find User"], status: 404
      end
    end
  
    private
    def user_params
      params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :photo)
    end
  end
  