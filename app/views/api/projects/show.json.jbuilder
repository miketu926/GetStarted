json.extract! @project, :project, :description, :category, :project_picture, :goal_amt, :funded_amt, :duration_days, :user_id

if @project.project_picture.attached?
  json.photo url_for(@project.project_picture)
end