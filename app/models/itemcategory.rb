# frozen_string_literal: true

class Itemcategory < ApplicationRecord
  belongs_to :item
  belongs_to :category
end
