# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

demo = User.create!(name: "demo_user", email: "demo_user@getstarted.com", password: "demouser")
starwars = User.create!(name: "starwars", email: "starwars", password: "starwars")
user1 = User.create!(name: "user1", email: "user1", password: "password")
user2 = User.create!(name: "user2", email: "user2", password: "password")
user3 = User.create!(name: "user3", email: "user3", password: "password")
user4 = User.create!(name: "user4", email: "user4", password: "password")
user5 = User.create!(name: "user5", email: "user5", password: "password")
user6 = User.create!(name: "user6", email: "user6", password: "password")
user7 = User.create!(name: "user7", email: "user7", password: "password")
user8 = User.create!(name: "user8", email: "user8", password: "password")
user9 = User.create!(name: "user9", email: "user9", password: "password")
user10 = User.create!(name: "user10", email: "user10", password: "password")

project1 = Project.create!(project: "sample1", location: "New York, New York", description: "test", category: "design", goal_amt: 10, funded_amt: 3, duration_days: 3, user_id: user1.id)
project2 = Project.create!(project: "sample2", location: "San Francisco, California", description: "testing", category: "games", goal_amt: 25, funded_amt: 10, duration_days: 56, user_id: user2.id)
project3 = Project.create!(project: "sample3", location: "New York, New York", description: "testing", category: "arts", goal_amt: 2500, funded_amt: 1000, duration_days: 15, user_id: user1.id)
project4 = Project.create!(project: "sample4", location: "Miami, Florida", description: "testing", category: "design", goal_amt: 10000, funded_amt: 1000000, duration_days: 25, user_id: user4.id)
project5 = Project.create!(project: "sample5", location: "Boston, Massachusetts", description: "testing", category: "technology", goal_amt: 25000, funded_amt: 70000, duration_days: 10, user_id: user3.id)
project6 = Project.create!(project: "sample6", location: "San Diego, California", description: "testing", category: "technology", goal_amt: 1000000, funded_amt: 1000, duration_days: 9, user_id: user2.id)
project7 = Project.create!(project: "sample7", location: "Dallas, Texas", description: "testing", category: "technology", goal_amt: 300000, funded_amt: 300000, duration_days: 22, user_id: user1.id)
