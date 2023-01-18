class User < ApplicationRecord

    has_many :carts
    has_many :cart_items, through: :carts
    
    has_secure_password

    # has_many :cart_items
    # has_many :items, through: :cart_items
    
    
    # validates :email, :password, :first_name, :last_name, presence: true
    # validates :password, length: {minimum: 3}
    # validates :username, :password, :email, uniqueness: { case_sensitive: false }
    
    #u1=User.all.first
    #u1.carts (line3)
    #u1.cart_itmes (line4)
end
