class ItemsController < ApplicationController
      before_action :set_item, only: [:show]

    # GET /categories
  def index
    @items = Item.all
    json_response(@items)
  end
end
