class Api::BusinessesController < ApplicationController

    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.find_by(id: params[:id])
    
  
        render :show
    end

    private

    def business_params
        params.require(:business).permit(
            :id,
            :name, 
            :address, 
            :state, 
            :city, 
            :zipcode, 
            :opentime, 
            :closetime, 
            :phone_number, 
            :website, 
            :price, 
            :categories,
            :latitude, 
            :longitude,
            photos: [])
    end
end
