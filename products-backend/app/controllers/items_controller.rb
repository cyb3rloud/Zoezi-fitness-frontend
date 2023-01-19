class ItemsController < ApplicationController

    skip_before_action :authorized, only: [:index, :destroy]
    
    def index
        # render json: Items.all.to_json(
        # except: [:created_at, :updated_at])
        items = Item.all
        render json: items
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy();
        render json: {message: "Successfully Removed"}
    end
    
end
