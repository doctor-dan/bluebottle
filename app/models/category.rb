class Category < ApplicationRecord
    has_many :itemcategories
    has_many :items, :through => :itemcategories
end
