Rails.application.routes.draw do
  resources :locations
   namespace :api do
    namespace :v1 do
      resources :items
      resources :categories
    end
end
end