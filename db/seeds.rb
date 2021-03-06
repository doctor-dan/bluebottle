Category.create!([
  {name: "Beverage"},
  {name: "Baked Product"},
  {name: "Coffee Equipment"},
  {name: "Coffee Bean"}
])
Item.create!([
  {sku: "BV-CAP", name: "カプチーノ", price: "400.0", currency: "JPY"},
  {sku: "BV-LATTE", name: "カフェラテ", price: "450.0", currency: "JPY"},
  {sku: "BV-ESP", name: "エスプレッソ", price: "320.0", currency: "JPY"},
  {sku: "BV-DRIP", name: "ドリップコーヒー", price: "425.0", currency: "JPY"},
  {sku: "BP-SRW-BCKL", name: "ストロベリーバックル", price: "425.0", currency: "JPY"},
  {sku: "BP-BLGN-WFFL", name: "ベルギーワッフル", price: "1000.0", currency: "JPY"},
  {sku: "CE-CFF-DRP", name: "コーヒードリッパー", price: "2750.0", currency: "JPY"},
  {sku: "CE-BRTZ-CF-GRN", name: "バラッツァコーヒーグラインダー", price: "15000.0", currency: "JPY"},
  {sku: "CB-BL-DNVN", name: "ベラドノバン", price: "1800.0", currency: "JPY"},
  {sku: "CB-BRN-KNZ", name: "ブルンジカヤンザ", price: "2600.0", currency: "JPY"},
  {sku: "BV-CAP", name: "Cappuccino", price: "3.75", currency: "USD"},
  {sku: "BV-LATTE", name: "Latte", price: "4.25", currency: "USD"},
  {sku: "BV-ESP", name: "Espresso", price: "3.0", currency: "USD"},
  {sku: "BV-DRIP", name: "Drip Coffee", price: "4.0", currency: "USD"},
  {sku: "BP-SRW-BCKL", name: "Strawberry Buckle", price: "4.0", currency: "USD"},
  {sku: "BP-BLGN-WFFL", name: "Belgian Waffle", price: "9.0", currency: "USD"},
  {sku: "CE-CFF-DRP", name: "Coffee Dripper", price: "25.0", currency: "USD"},
  {sku: "CE-BRTZ-CF-GRN", name: "Baratza Coffee Grinder", price: "139.0", currency: "USD"},
  {sku: "CB-BL-DNVN", name: "Bella Donovan", price: "17.0", currency: "USD"},
  {sku: "CB-BRN-KNZ", name: "Burundi Kayanza", price: "24.0", currency: "USD"}
])
Itemcategory.create!([
  {item_id: 1, category_id: 1},
  {item_id: 11, category_id: 1},
  {item_id: 2, category_id: 1},
  {item_id: 12, category_id: 1},
  {item_id: 3, category_id: 1},
  {item_id: 13, category_id: 1},
  {item_id: 4, category_id: 1},
  {item_id: 14, category_id: 1},
  {item_id: 5, category_id: 2},
  {item_id: 15, category_id: 2},
  {item_id: 6, category_id: 2},
  {item_id: 16, category_id: 2},
  {item_id: 7, category_id: 3},
  {item_id: 17, category_id: 3},
  {item_id: 8, category_id: 3},
  {item_id: 18, category_id: 3},
  {item_id: 9, category_id: 4},
  {item_id: 19, category_id: 4},
  {item_id: 10, category_id: 4},
  {item_id: 20, category_id: 4}
])
