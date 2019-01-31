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
user1 = User.create!(name: "Mike", email: "user1", password: "password")
user2 = User.create!(name: "Sam", email: "user2", password: "password")
user3 = User.create!(name: "Maggie", email: "user3", password: "password")
user4 = User.create!(name: "Greg", email: "user4", password: "password")
user5 = User.create!(name: "Johnny", email: "user5", password: "password")
user6 = User.create!(name: "Jeff", email: "user6", password: "password")
user7 = User.create!(name: "Eric", email: "user7", password: "password")
user8 = User.create!(name: "Zak", email: "user8", password: "password")
user9 = User.create!(name: "Gary", email: "user9", password: "password")
user10 = User.create!(name: "Derek", email: "user10", password: "password")

project1 = Project.create!(project: "The Best Tire Guard In Town", location: "New York, New York", description: "The only tire guard you'll ever need in order to succeed in life of an amature biker.", category: "Design", goal_amt: 10, funded_amt: 1, duration_days: 3, user_id: user1.id)
project2 = Project.create!(project: "Brain Starter", location: "San Francisco, California", description: "Coffee isn't always the best for you but oftentimes you need it. Now there's a replacement that'll stimulate your brain just as well - introducing Brain Starter. A wearable device for your head.", category: "Technology", goal_amt: 100000, funded_amt: 245983, duration_days: 9, user_id: user2.id)
project3 = Project.create!(project: "Cat Lamp", location: "New York, New York", description: "A lamp, in cat form.", category: "Arts", goal_amt: 11000, funded_amt: 9000, duration_days: 29, user_id: user8.id)
project4 = Project.create!(project: "Desk Light For Your Desk, ball edition", location: "Miami, Florida", description: "A light for your desk in the shape of a sphere", category: "Design", goal_amt: 10000, funded_amt: 1000000, duration_days: 25, user_id: user4.id)
project5 = Project.create!(project: "Digby", location: "New York, New York", description: "The new App Academy mascot", category: "Design", goal_amt: 17000, funded_amt: 17000, duration_days: 10, user_id: user1.id)
project6 = Project.create!(project: "Drone for life", location: "San Diego, California", description: "The drone that spies as it flies.", category: "Technology", goal_amt: 1239282, funded_amt: 25000, duration_days: 9, user_id: user2.id)
project7 = Project.create!(project: "Emergen-Sew", location: "Dallas, Texas", description: "In case of an emergency, whip out your pen that is also a sewing kit...", category: "Photography", goal_amt: 300000, funded_amt: 398372, duration_days: 1, user_id: user10.id)
project8 = Project.create!(project: "Fidget Spinner", location: "Chicago, Illinois", description: "What? Why? When? What?", category: "Technology", goal_amt: 10, funded_amt: 3000000, duration_days: 0, user_id: user7.id)
project9 = Project.create!(project: "The Best Game in Town", location: "San Jose, California", description: "A game that will not only play, but play on your phone. Voted the best game of the century, by one person.", category: "Technology", goal_amt: 20000, funded_amt: 12758, duration_days: 0, user_id: user8.id)
project10 = Project.create!(project: "A Cool Garbage Can", location: "New York, New York", description: "A garbage can that doesn't look like one, but everyone cares.", category: "Arts", goal_amt: 10000, funded_amt: 9223, duration_days: 43, user_id: user6.id)
project11 = Project.create!(project: "Everlasting Headphones That Doubles as a Health Monitor", location: "Miami, Florida", description: "A necesssary accessory for your daily life that will change how you live your life.", category: "Film", goal_amt: 2000000, funded_amt: 8000, duration_days: 29, user_id: user3.id)
project12 = Project.create!(project: "The Greatest Invention Ever", location: "New York, New York", description: "A box that puts pressure on a pack of juice to serve, automated!", category: "Technology", goal_amt: 9999, funded_amt: 13728372, duration_days: 11, user_id: user5.id)
project13 = Project.create!(project: "Maple Syrup - For Everything", location: "Montreal, Canada", description: "It's maple syrup, what's there to not like?", category: "Design", goal_amt: 7000, funded_amt: 2310, duration_days: 1, user_id: starwars.id)
project14 = Project.create!(project: "A Roll of Cash", location: "New York, New York", description: "This isn't a thing anymore, because Venmo.", category: "Arts", goal_amt: 209000, funded_amt: 33000, duration_days: 16, user_id: demo.id)
project15 = Project.create!(project: "THE SWITCH", location: "New York, New York", description: "You know what time it is. Lunch time.", category: "Technology", goal_amt: 1, funded_amt: 0, duration_days: 1, user_id: starwars.id)
project16 = Project.create!(project: "Opal The Cat", location: "New York, New York", description: "Opal the Cat, in his spetacular cat form", category: "Arts", goal_amt: 11000, funded_amt: 9000, duration_days: 29, user_id: user9.id)
project17 = Project.create!(project: "The Only Passport You'll Ever Need", location: "Las Vegas, Nevada", description: "Identity theft is a thing, and so is this passport.", category: "Film", goal_amt: 10, funded_amt: 9000, duration_days: 29, user_id: user2.id)
project18 = Project.create!(project: "Coffee To Go", location: "New York, New York", description: "A portable devive that carries coffee for when you need coffee the most on a daily basis.", category: "Design", goal_amt: 11000, funded_amt: 9000, duration_days: 22, user_id: user1.id)
project19 = Project.create!(project: "Goggles", location: "San Francisco, California", description: "A goggle that you need for skiing or snowboarding.", category: "Technology", goal_amt: 400000, funded_amt: 9000, duration_days: 23, user_id: user7.id)
project20 = Project.create!(project: "Storage 2 Go", location: "New York, New York", description: "A USB strip that carries big data.", category: "Tecchnology", goal_amt: 1000000, funded_amt: 1252, duration_days: 2, user_id: user7.id)
project21 = Project.create!(project: "Virtual Reality 2 Go", location: "San Diego, California", description: "A VR personal device that you will need.", category: "Design", goal_amt: 11000, funded_amt: 9000, duration_days: 29, user_id: user8.id)


file1 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/biketireguard.jpg')
file2 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/brainstarter.jpg')
file3 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/catlamp.png')
file4 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/desklight.jpg')
file5 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/digby.jpg')
file6 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/drone.jpg')
file7 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/emergencysewpen.jpg')
file8 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/fidgetspinner.jpeg')
file9 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/gameapp.png')
file10 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/garbagecollector.jpg')
file11 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/headphones.jpg')
file12 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/juicebox.jpeg')
file13 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/maplesyrup.jpg')
file14 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/money.jpg')
file15 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/ninswitch.jpg')
file16 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/opal.jpg')
file17 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/passport.jpg')
file18 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/portablecpffee.jpg')
file19 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/skigoggles.jpg')
file20 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/storage2go.jpg')
file21 = EzDownload.open('https://s3.amazonaws.com/getstarted-dev/VR.jpg')

project1.project_picture.attach(io: file1, filename: 'image1.jpg')
project1.save!
project2.project_picture.attach(io: file2, filename: 'image2.jpg')
project2.save!
project3.project_picture.attach(io: file3, filename: 'image3.jpg')
project3.save!
project4.project_picture.attach(io: file4, filename: 'image4.jpg')
project4.save!
project5.project_picture.attach(io: file5, filename: 'image5.jpg')
project5.save!
project6.project_picture.attach(io: file6, filename: 'image6.jpg')
project6.save!
project7.project_picture.attach(io: file7, filename: 'image7.jpg')
project7.save!
project8.project_picture.attach(io: file8, filename: 'image8.jpg')
project8.save!
project9.project_picture.attach(io: file9, filename: 'image9.jpg')
project9.save!
project10.project_picture.attach(io: file10, filename: 'image10.jpg')
project10.save!
project11.project_picture.attach(io: file11, filename: 'image11.jpg')
project11.save!
project12.project_picture.attach(io: file12, filename: 'image12.jpg')
project12.save!
project13.project_picture.attach(io: file13, filename: 'image13.jpg')
project13.save!
project14.project_picture.attach(io: file14, filename: 'image14.jpg')
project14.save!
project15.project_picture.attach(io: file15, filename: 'image15.jpg')
project15.save!
project16.project_picture.attach(io: file16, filename: 'image16.jpg')
project16.save!
project17.project_picture.attach(io: file17, filename: 'image17.jpg')
project17.save!
project18.project_picture.attach(io: file18, filename: 'image18.jpg')
project18.save!
project19.project_picture.attach(io: file19, filename: 'image19.jpg')
project19.save!
project20.project_picture.attach(io: file20, filename: 'image20.jpg')
project20.save!
project21.project_picture.attach(io: file21, filename: 'image21.jpg')
project21.save!