class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :item_id
  belongs_to :item
  belongs_to :cart
end
