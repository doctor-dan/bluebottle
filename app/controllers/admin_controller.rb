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
    show_counts
  end

  def modprice
    case params[:action]
    when 'modcategory'
      p 'modding category'
      @category = Category.find(params[:id])
      @category.item.each do |it|
        it.price *= params[:modprice]
        it.save
      end
    when 'moditem'
      p 'modding item'
    end
  end
end
