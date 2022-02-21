Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'static#index'

  namespace :v1, defaults: { format: :json } do
    # Defines the root path route ("/")
    get 'things', to: 'things#index'
  end
end
