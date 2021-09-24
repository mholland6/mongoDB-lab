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

// Reports on orders collection:
// 9. Find the total dollar amount of all sales ever.
// Use the total field.
db.orders.aggregate([
  {
    $group: {
      _id: null,
      totalSalesEver: { $sum: "$total" },
    },
  },
]);

// 10
db.orders.aggregate([
  {
    $match: {
      date: "2017-05-22",
    },
  },
  {
    $group: {
      _id: null,
      totalSalesDay: { $sum: "$total" },
    },
  },
]);

// 11
// Find the date with the greatest number of orders.
// Include the date and the number of orders.
// Expected Result: 2017-05-04 3
db.orders.aggregate([{ $sortByCount: "$date" }, { $limit: 1 }]);

// 12 Find the date with the greatest total sales.
// Include the date and the dollar amount for that day.
// Expected Result: 2017-05-22 $271.2
db.orders.aggregate([
  { $group: { _id: "$date", greatestTotalSales: { $sum: "$total" } } },
  { $sort: { greatestTotalSales: -1 } },
  { $limit: 1 },
]);
