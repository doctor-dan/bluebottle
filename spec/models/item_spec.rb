# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Item, type: :model do
  it { should have_one(:category).through(:itemcategory) }
  it { should have_one(:itemcategory) }
end
