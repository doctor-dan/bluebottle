class CreateDatabaseStructure < ActiveRecord::Migration[5.2]
  def change
    create_table 'categories', force: :cascade do |t|
      t.string 'name'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
    end

    create_table 'itemcategories', force: :cascade do |t|
      t.bigint 'item_id'
      t.bigint 'category_id'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
      t.index ['category_id'], name: 'index_itemcategories_on_category_id'
      t.index ['item_id'], name: 'index_itemcategories_on_item_id'
    end

    create_table 'items', force: :cascade do |t|
      t.string 'sku'
      t.string 'name'
      t.decimal 'price', precision: 10, scale: 2
      t.string 'currency'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
    end
  end
end
