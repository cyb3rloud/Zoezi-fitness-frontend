class ItemSerializer < ActiveModel::Serializer
   attributes :id, :name, :image, :description, :movie, :price, :quantity, :category
end
