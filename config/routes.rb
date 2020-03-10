Rails.application.routes.draw do
  
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create, :show]
    resources :friendships
    resources :dog_breeds, only: [:index, :show, :create, :update]
    resources :pet_shops, only: [:index, :show]
    resources :checkins, only: [:index, :create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
