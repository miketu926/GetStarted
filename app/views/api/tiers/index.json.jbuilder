json.tiers do
  @tiers.each do |tier|
    json.set! tier.id do
      json.extract! tier, :id, :title, :description, :amount
    end
  end
end

json.projects do
  @tiers.each do |tier|
    json.set! tier.project_id do
      json.extract! tier.project, :id, :project
    end
  end
end