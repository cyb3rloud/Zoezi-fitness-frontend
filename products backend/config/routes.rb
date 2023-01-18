Rails.application.routes.draw do
  resources :items
  resources :cart_items
  resources :carts
  patch '/users/:id', to: 'users#edit'
  resources :users
  
  # resources :users, only: [:create]
    post '/login', to: 'auth#create'
    post '/cart_items', to: 'cart_items#create'
    post '/auto_login', to: 'auth#auto_login'
    get '/logged_in', to: 'application#logged_in?'
    # get '/items', to: 'items#index'
    # get '/users', to: 'userss#index'
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
