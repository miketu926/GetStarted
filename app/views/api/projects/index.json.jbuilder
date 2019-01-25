@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :project, :description, :category, :project_picture, :goal_amt, :funded_amt, :duration_days, :user_id
  end
end