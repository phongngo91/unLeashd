class Api::PetShopsController < ApplicationController
  def index
    @petShops = PetShop.all
    render :index
  end

  def show
    @petShop = PetShop.find_by(id: params[:id])
    if @petShop
      render :show
    else
      render json: ["Did not find Pet Shop"], status: 404
    end
  end

end