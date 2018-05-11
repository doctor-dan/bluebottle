class Category < ApplicationRecord
    has_many :itemcategories, :foreign_key => "category", :primary_key => :name
    has_many :items, :through => :itemcategories
end
