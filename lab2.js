// 1 Avg Age
db.people.aggregate([
  {
    $group: {
      _id: null,
      averageAge: { $avg: "$age" },
    },
  },
]);

// 2
db.people.aggregate([
  {
    $group: {
      _id: "$gender",
      averageAge: { $avg: "$age" },
    },
  },
]);

// 3
db.people.aggregate([
  {
    $group: {
      _id: "$gender",
      count: { $sum: 1 },
    },
  },
]);

// 4
db.people.aggregate([{ $sort: { age: -1 } }, { $limit: 3 }]);

// 5
db.people.aggregate([
  { $sort: { age: 1 } },
  { $limit: 5 },
  {
    $project: {
      name: { $concat: ["$first_name", " ", "$last_name"] },
      age: 1,
      _id: 0,
    },
  },
]);

// 6
db.people.aggregate([
  {
    $group: {
      _id: null,
      averageNumChildren: { $avg: { $size: "$children" } },
    },
  },
]);

// 7
