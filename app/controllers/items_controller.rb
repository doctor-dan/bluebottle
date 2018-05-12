class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

    # GET /items
  def index
    @items = Item.all
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
