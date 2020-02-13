class Api::DogBreedsController < ApplicationController

  def index
    @dogs = DogBreed.all
    render :index
  end

  def show
    @dog = DogBreed.find(params[:id])
    render json: @dog
  end

end
