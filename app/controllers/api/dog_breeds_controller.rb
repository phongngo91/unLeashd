class Api::DogBreedsController < ApplicationController

  def index
    @dogs = DogBreed.all
    render :index
  end

  def create
    @dog = DogBreed.new(dog_params)
    if @dog.save
      render :show
    else
      render json: @dog.errors.full_messages, status: 422
    end
  end

  def show
    @dog = DogBreed.find_by(id: params[:id])
    if @dog
      render :show
    else
      render json: ["Dog not found"], status: 422
    end
  end

  def update
    @dog = DogBreed.find(params[:dog][:id])
    if @dog.update(dog_params)
      render :show
    else
      render json: @dog.errors.full_messages, status: 422
    end
  end

  private

  def dog_params
    params.require(:dog).permit(:breed_name, :description, :fluff_by_vol, :int_cute_unit, :pet_shop_id, :author_id, :photo)
  end

end
