conn = Faraday.new(:url => 'https://raw.githubusercontent.com/bluebottlecoffee/coding_exercise/master/ims')
response = conn.get('item_categories.json')
if response.status == 200
    Category.destroy_all
    Category.create(JSON.parse(response.body)) 
end

response = conn.get('ja-JP/item_details.json')
if response.status == 200
    Item.destroy_all
    Item.create(JSON.parse(response.body))
end

response = conn.get('en-US/item_details.json')
if response.status == 200
    Item.create(JSON.parse(response.body))
end

response = conn.get('items.json')
if response.status == 200
    itemlist = JSON.parse(response.body)
    itemlist.map do |li|
        Category.where(name: li['category']).take.id
        Item.where(sku: li['sku']).take.id
    end
end