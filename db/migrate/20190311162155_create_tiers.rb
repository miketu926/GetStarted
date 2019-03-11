class CreateTiers < ActiveRecord::Migration[5.2]
  def change
    create_table :tiers do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :amount, null: false
      t.integer :num_backers
      t.integer :project_id, null: false
      
      t.timestamps
    end

    add_index(:tiers, :project_id)
    add_index(:tiers, [:project_id, :amount], unique: true)
  end
end
