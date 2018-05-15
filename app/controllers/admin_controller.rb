# frozen_string_literal: true

class AdminController < ApplicationController
  def show
    show_counts
  end

  def reset
    conn = make_connection
    load_item_categories(conn)
    load_item_details(conn)
    load_items(conn)
    @items = Item.all
    json_response(@items)
  end

  def modify_price
    p "updating items for #{params[:id]}"
    p "updating price by #{params[:modify_price]}"
    @category = Category.find(params[:id])
    @category.items.each do |it|
      it.price *= params[:modify_price].to_f
      it.save
    end
    @items = Item.all
    json_response(@items)
  end
end
