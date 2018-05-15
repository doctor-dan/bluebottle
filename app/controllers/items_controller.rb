# frozen_string_literal: true

class ItemsController < ApplicationController
  before_action :set_item, only: %i[show update]
  # GET /items
  def index
    @items = if params[:currency]
               Item.where('currency = ?', params[:currency]).order(:name)
             else
               Item.all.order(:name)
             end
    json_response(@items)
  end

  # GET /items/1
  def show
    json_response(@item)
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_item
    @item = Item.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def item_params
    params.permit(:price)
  end
end
