@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :project, :description, :category, :goal_amt, :funded_amt, :duration_days, :user_id, :location
    if project.project_picture.attached?
      json.photo url_for(project.project_picture)
    end
  end
end