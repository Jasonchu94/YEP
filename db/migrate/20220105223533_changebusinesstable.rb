class Changebusinesstable < ActiveRecord::Migration[7.0]
  def change
    rename_table :business, :businesses
  end
end
