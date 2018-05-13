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
end
