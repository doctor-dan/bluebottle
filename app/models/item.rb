class Item < ApplicationRecord
    has_one :itemcategory, :foreign_key => :sku
    has_one :category, :through => :itemcategory
end
