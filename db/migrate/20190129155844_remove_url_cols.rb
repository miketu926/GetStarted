class RemoveUrlCols < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :project_picture
    remove_column :users, :profile_picture
  end
end
