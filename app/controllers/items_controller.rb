class ItemsController < ApplicationController
  before_action :set_item, only: [:show]
    # GET /items
  def index
    if params[:currency]
      @items = Item.where('currency = ?', params[:currency])
    else
      @items = Item.all
    end
    json_response(@items)
  end
  
   # GET /items/1
  def show
    json_response(@item)
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_params
      params.require(:item).permit(:sku, :name, :price, :currency)
    end
end
