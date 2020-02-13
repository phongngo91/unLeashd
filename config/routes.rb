Rails.application.routes.draw do
  
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create, :show]
    resources :dog_breeds
    resources :pet_shops, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
