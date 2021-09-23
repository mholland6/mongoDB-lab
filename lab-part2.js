// In people collection
// 1. Add a person to the collection. You pick the data, 
// but they should have an empty array for children.
db.people.insertOne({first_name: 'Grant',
  last_name: 'Chirpus',
  email: 'gchirpusgrandcircus.co',
  gender: 'Male',
  age: 5,
  state: 'Michigan',
  children: [] }
// 2. Add another person. They should have at least two children.
db.people.insertOne({first_name: 'Grantina',
  last_name: 'Chirpus',
  email: 'grantinachirpusgrandcircus.co',
  gender: 'Female',
  age: 5,
  state: 'Michigan',
  children: [
    {name: "Grant Junior", age: 1},
    {name: "Gertrude", age: 2}
  ] })
// 3. Update one person named Clarence. 
//He moved from North Dakota to South Dakota.
db.people.updateOne({first_name: "Clarence"}, {$set: {state: "South Dakota"}})
// 4. Update Rebecca Hayes. Remove her email address.
db.people.updateOne({_id: ObjectId("614c9ff02017382ecf4df22f")}, {$unset: {email: ""}})
// 5. Update everyone from Missouri. 
// They all had a birthday today, so add one to their age. (expect 4 matches)
db.people.updateMany({state: "Missouri"}, {$inc: {age: 1}})
// 6. Jerry Baker has updated information. Replace with a new document:
b.people.replaceOne({last_name: "Baker"}, {first_name: "Jerry"}, {$set: 
    { first_name: "Jerry", 
    last_name: "Baker-Mendez", 
    email: "jerry@classic.ly", 
    gender:"Male", 
    age: 28, 
    state: "Vermont",
     "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }})

// // The next few lines were a mistake, I couldn't find Jerry Baker initially.
// db.people.updateOne({$and: [ {last_name: "Baker"}, {first_name: "Jerry"}]}, {$set: 
//   { first_name: "Jerry", 
//   last_name: "Baker-Mendez", 
//   email: "jerry@classic.ly", 
//   gender:"Male", 
//   age: 28, 
//   state: "Vermont",
//    "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }}, {upsert: true})
// 7. Delete Wanda Bowman.
db.people.deleteOne({_id: ObjectId("614c9ff02017382ecf4df255")})
// 8. Delete everyone who does not have an email address specified. (expect 36 matches - maybe more depending what you added above)
db.people.deleteMany({email: null})
// 9  
// Add several documents to a new submissions collection. Do it all in one command. (Remember, MongoDB will create the collection for you. Just start adding documents.)
db.submissions.insertMany([
  {title: "The River Bend", upvotes: 10, downvotes: 2, artist: "614c9ff02017382ecf4df1fe"},
  {title: "Nine Lives", upvotes: 7, downvotes: 0, artist: "614c9ff02017382ecf4df22c"},
  {title: "Star Bright", upvotes: 19, downvotes: 3, artist: "614c9ff02017382ecf4df2af"},
  {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: "614c9ff02017382ecf4df235"},
  {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: "614c9ff02017382ecf4df1fc"}
])
// 10 Add 2 upvotes for "The River Bend".
db.submissions.updateOne({title: "The River Bend"}, {$inc: {upvotes: 2}})
// 11 Add a field round2 = true to all submissions with at least 10 upvotes. (expect 3 matches)
db.submissions.updateMany({upvotes: {$gte: 10}}, {$set: {round2: true}})



