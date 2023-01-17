class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
     t.string :name
      t.string :image
      t.string :category
      t.string :description
      t.string :movie
      t.string :price
      t.integer :quantity

      t.timestamps
    end
  end
end
