FactoryBot.define do
  factory :item do
      sku { Faker::Lorem.word }
      name { Faker::StarWars.character }
      price { Faker::Number.number(10) }
      currency { Faker::Lorem.word }
  end
end