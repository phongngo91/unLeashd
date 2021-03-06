class Api::CheckinsController < ApplicationController
  def index
    # @checkins = Checkin.with_attached_photo.all
    @checkins = Checkin.order('checkins.updated_at DESC').page(params[:page]).per(10)
    if @checkins.length > 0
      render :index 
    else
      render json: ["No More Checkins"], status: 404
    end
  end

  def create
    @checkin = Checkin.new(checkin_params)
    if @checkin.save
      render json: @checkin
    else
      render @checkin.errors.full_messages, status: 422
    end
  end

  def show
    @checkin = Checkin.includes(:author, :dog_breed).find_by(id: params[:id])
    if @checkin
      render json: @checkin
    else
      render json: ["Checkin not found"], status: 404
    end
  end

  def destroy
    @checkin = Checkin.find(params[:id])
    @checkin.destroy
    render json: @checkin
  end

  private

  def checkin_params
    params.require(:checkin).permit(:author_id, :dog_breed_id, :rating, :checkin_body, :photo)
  end

end
