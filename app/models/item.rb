class Item < ApplicationRecord
    has_one :itemcategory
    has_one :category, :through => :itemcategory
end
