Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  mount ActionCable.server => '/cable'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  resources :users, only: [:create, :show, :index, :update]
  resources :payments, only: :create

  resources :doctors, only: [:index, :show, :update] do
    get :bookings, on: :collection
    get :total_payments, on: :collection
    put :upload_certificate, on: :member

    resources :specialists, only: [:create]
    resources :treatments, only: [:create, :destroy]
  end

  resources :bookings, only: [:index, :create] do
    put :update_status, on: :member
  end
  
  resources :calls, only: [:index, :create] do
    collection do
      post :accept_call
      post :reject_call
    end
  end

  namespace :admin do
    resources :users, only: [:index] do
      put :update_status, on: :member
    end

    resources :bookings, only: [:index]
    resources :payments, only: [:index]

    get '/dashboard', to: 'dashboard#index'
  end
end
