# frozen_string_literal: true

Rails.application.routes.draw do
  get 'admin', action: :show, controller: 'admin'
  put 'admin', action: :reset, controller: 'admin'
  resources :items, only: %i[index show update]
  resources :categories, only: %i[index show update]
end
