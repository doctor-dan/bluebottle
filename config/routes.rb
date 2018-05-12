Rails.application.routes.draw do

  get 'admin', action: :show, controller: 'admin'
  put 'admin', action: :reset, controller: 'admin'
  resources :items
  resources :categories
end