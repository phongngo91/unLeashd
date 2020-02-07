Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Set up Rails API
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create]
  end

  root to: 'static_pages#root'
end
