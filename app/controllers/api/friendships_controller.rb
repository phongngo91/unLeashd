class Api::FriendshipsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    render json: @user.friends
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render json: @friendship.friend
    else
      render json: ["Friendship could not be saved"], status: 422
    end
  end

  def delete
    @friendship = Friendship.find_by(user_id: params[:user_id], friend_id: params[:friend_id])
    if @friendship
      @friendship.destroy
      render json: ["successfully destroyed friendship"]
    else
      render json: ["cannot find friendship to destroy"]
    end
  end

  private 

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
