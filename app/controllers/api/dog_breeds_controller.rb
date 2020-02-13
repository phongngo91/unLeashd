class Api::DogBreedsController < ApplicationController

  def index
    @dogs = DogBreed.all
    render :index
  end

  def create
    @dog = DogBreed.new(dog_params)
    if @dog.save
      render @dog
    else
      render json: @dog.errors.full_messages, status: 422
    end
  end

  def show
    @dog = DogBreed.find(params[:id])
    render json: @dog
  end

  private

  def dog_params
    params.require(:dog).permit(:breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id, :photo)
  end

end
