class CreateComics < ActiveRecord::Migration[6.1]
  def change
    create_table :comics do |t|
      t.string :name
      t.string :release_year
      t.string :publisher
      t.string :image
      t.string :issue_number
      t.string :count_of_issues
      t.references :creator

      t.timestamps
    end
  end
end
