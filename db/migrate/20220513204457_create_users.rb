class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :image_url
      t.string :phone_number
      t.string :pasword_digest

      t.timestamps
    end
  end
end
