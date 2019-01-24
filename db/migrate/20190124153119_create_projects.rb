class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project, null: false
      t.string :description, null: false
      t.string :category, null: false
      t.string :project_picture
      t.integer :goal_amt, null: false
      t.integer :funded_amt, null: false
      t.integer :duration_days, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
      add_index(:projects, :project, unique: true)
      add_index(:projects, :user_id)
  end
end
