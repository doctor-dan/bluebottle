module LoadFiles
    def make_connection
        Faraday.new(:url => 'https://raw.githubusercontent.com/bluebottlecoffee/coding_exercise/master/ims')
    end
    
    def load_item_categories(conn)
        response = conn.get('item_categories.json')
        if response.status == 200
            Category.destroy_all
            Category.create(JSON.parse(response.body)) 
        end
    end
    
    def load_item_details(conn)
        response = conn.get('ja-JP/item_details.json')
        if response.status == 200
            Item.destroy_all
            Item.create(JSON.parse(response.body))
        end
        
        response = conn.get('en-US/item_details.json')
        if response.status == 200
            Item.create(JSON.parse(response.body))
        end
    end
    
    def load_items(conn)
        response = conn.get('items.json')
        if response.status == 200
            Itemcategory.destroy_all
            itemlist = JSON.parse(response.body)
            itemlist.each do |it|
                catbev = Category.find_by_name(it['category'])
                itm = Item.find_by_sku(it['sku'])
                catbev.items << itm
            end
        end
    end
end