# frozen_string_literal: true

class CategoriesController < ApplicationController
  before_action :set_category, only: %i[show update]

  # GET /categories
  def index
    @categories = Category.all
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
      it.price *= params[:modify_price].to_f
      it.save
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = Category.find(params[:id])
  end

end
