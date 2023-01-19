class CartItemsController < ApplicationController

    skip_before_action :authorized, only: [:index, :show, :destroy, :create]

    def index
        cart_items = CartItem.all 
        render json: cart_items, only: [:name, :image, :price, :quantity, :description]

    end

    def show
        cart_item = CartItem.find(params[:id])
        render json: cart_item.to_json(:except =>  [:updated_at, :created_at])
    end 

    def create
        # byebug
        cart_item = CartItem.create(cart_item_params)
        render json: cart_item.to_json(:except => [:updated_at, :created_at])
    end

    def destroy
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
        render json: {"Deleted": "deleted", cart_item: cart_item}
    end

    private 
    
    def cart_item_params
        params.require(:cart_item).permit(:cart_id, :item_id)
    end

end
