class Api::PetShopsController < ApplicationController
  def index
    @petShops = PetShop.all
    render :index
  end

end