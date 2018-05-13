# frozen_string_literal: true

FactoryBot.define do
  factory :item do
    sku { Faker::Lorem.word }
    name { Faker::StarWars.character }
    price { Faker::Number.decimal(2).to_f }
    currency { Faker::Lorem.word }
  end
end
