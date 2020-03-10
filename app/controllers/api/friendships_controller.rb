class Api::FriendshipsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    render json: @user.friends
  end

  def create
    @friendship = Friendship.new(friendship_params)
  end

  def delete

  end

  private 

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
