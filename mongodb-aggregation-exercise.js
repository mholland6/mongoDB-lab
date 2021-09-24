// 1
db.menu.aggregate([{ $sort: { name: 1 } }]);
// 2 List only the first 3 drinks, sorted alphabetically by name. ($sort, $limit)

db.menu.aggregate([{ $sort: { name: 1 } }, { $limit: 3 }]);

// 3 List the next 3 drinks (4-6), sorted alphabetically by name. ($sort, $skip, $limit)
db.menu.aggregate([{ $sort: { name: 1 } }, { $skip: 3 }, { $limit: 3 }]);

// 4 List all drinks alphabetically by name.
// Only show the name of each. ($sort, $project)
db.menu.aggregate([{ $sort: { name: 1 } }, { $project: { name: 1 } }]);

// 5
db.menu.aggregate([{ $match: { price: { $gt: 3 } } }]);

// 6
db.menu.aggregate([{ $match: { type: "Espresso" } }]);

// 7

// 8
db.menu.aggregate([
  {
    $group: {
      _id: null,
      lowestPrice: { $min: "$price" },
    },
  },
]);

// 9
db.menu.aggregate([
  {
    $group: {
      _id: null,
      avgPrice: { $avg: "$price" },
    },
  },
  {
    $project: {
      _id: false,
    },
  },
]);

//13
db.menu.aggregate([{ $sort: { price: -1 } }, { $limit: 2 }]);
