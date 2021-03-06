# frozen_string_literal: true
module Api::V1
  class CategoriesController < ApplicationController
    before_action :set_category, only: %i[show update]

    # GET /categories
    def index
      @categories = Category.all.order(:name)
      json_response(@categories)
    end

    # GET /categories/1
    def show
      json_response(@category)
    end

    # PUT /categories/1
    def update
      @category = Category.find(params[:id])
      # Update all items in a catagory
      # set price to price * percentile
      @category.items.each do |it|
        modprice = params[:modify_price].to_f / 100
        it.price *= modprice
        it.save
      end
      @items = Item.all
      json_response(@items)
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end
  end
end
