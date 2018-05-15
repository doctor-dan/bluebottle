# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ItemsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/items').to route_to('items#index')
    end

    it 'routes to #show' do
      expect(get: '/items/1').to route_to('items#show', id: '1')
    end

    it 'routes to #update via PUT' do
      expect(put: '/items/1').to route_to('items#update', id: '1')
    end
  end
end
