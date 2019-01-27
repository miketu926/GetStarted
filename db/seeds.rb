# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

User.create!(name: "demo_user", email: "demo_user@getstarted.com", password: "demouser")
User.create!(name: "starwars", email: "starwars", password: "starwars")

Project.create!(project: "sample1", description: "test", category: "design", goal_amt: 10, funded_amt: 3, duration_days: 3, user_id: 1)
Project.create!(project: "sample2", description: "testing", category: "games", goal_amt: 25, funded_amt: 10, duration_days: 15, user_id: 2)
