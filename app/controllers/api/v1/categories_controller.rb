module Api::V1
  class CategoriesController < ApplicationController
      
      before_action :set_category, only: [:show]
  
      # GET /categories
    def index
      @categories = Category.all
      json_response(@categories)
    end
  end
end

