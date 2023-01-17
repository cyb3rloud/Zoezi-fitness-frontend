class CartsController < ApplicationController

     skip_before_action :authorized, only: [:index, :show]

    def index
        cart_items = CartItem.all 
        render json: cart_items, only: [:name, :image, :price, :quantity]
    end

    def show
        cart = Cart.find(params[:id])
        render json: cart
    end

end
