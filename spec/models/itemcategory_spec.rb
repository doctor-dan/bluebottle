require 'rails_helper'

RSpec.describe Itemcategory, type: :model do
   it { should belong_to(:item) }
   it { should belong_to(:category) }
end
