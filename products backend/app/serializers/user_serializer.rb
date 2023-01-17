class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :cart_items, :carts
  # attributes :id, :username, :email, :cart_items, :carts, :phone_number, :first_name, :last_name, :shipping_address

end
