module Api::V1
  class ItemsController < ApplicationController
        before_action :set_item, only: [:show]
  
      # GET /categories
    def index
      @items = Item.all
      json_response(@items)
    end
    
     # GET /items/1
    def show
      json_response(@item)
    end
    
  end
end
