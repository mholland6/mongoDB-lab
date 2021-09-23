// MONGODB LAB 1 (PART 1 - QUERIES)
// 1
db.people.find()
// 2 
db.people.count()
// 3
db.people.find({state: "Arizona"})
// 4
db.people.find({state: "Arizona", gender: "Male"})
// 5
db.people.find( {$or: [
  {state: "Arizona"},
  {state: "New Mexico"}
]})
// 6
db.people.find({age: {$lt: 40}})
// 7
db.people.find( {$and: [
  {age: {$gte: 40}},
  {age: {$lte: 45}},
  {gender: {$ne: "Male"}}, 
  {state: "Florida"}
  ]})
// 8
db.people.find({first_name: /^H/})
// 9 
db.people.find({state: "Michigan"}).sort({first_name: 1})
// 10
db.people.find( {$or: [
  {state: "Virginia"},
  {first_name: "Virginia"},
]})
// 11 List the names of people under age 30. 
// Only display their first and last name. (38)
db.people.find({age: {$lt: 30}}, {first_name: true, last_name: true})
// 12 List all people in Montana. 
// Display all information except age. (2)
db.people.find({state: "Montana"}, {age: false})
// 13 List the email addresses of people with a ".edu" email. 
// Only display the email. (12)
db.people.find({email: /.edu$/}, {email: true})
// Extended Challenges
// 14 Count all people with at least one child under age four. (69)

// 15. List people who have no children. (43)
// 16. List people who have at least one child. (157)