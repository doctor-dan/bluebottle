# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Items API', type: :request do
  # initialize test data
  let!(:items) { create_list(:item, 10) }
  let(:item_id) { items.first.id }

  # Test suite for GET /items
  describe 'GET /items' do
    # make HTTP get request before each example
    before { get '/items' }

    it 'returns items' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /items/:id
  describe 'GET /items/:id' do
    before { get "/items/#{item_id}" }

    context 'when the record exists' do
      it 'returns the item' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(item_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:item_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Item/)
      end
    end
  end

  # Test suite for PUT /items/:id
  describe 'PUT /items/:id' do
    let(:valid_attributes) { { price: 1000 } }
    before { put "/items/#{item_id}", params: valid_attributes }

    context 'when item exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'updates the item' do
        updated_item = Item.find(item_id)
        expect(updated_item.price.to_s).to match(/1000/)
      end
    end
    context 'when the item does not exist' do
      let(:item_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Item/)
      end
    end
  end
end
