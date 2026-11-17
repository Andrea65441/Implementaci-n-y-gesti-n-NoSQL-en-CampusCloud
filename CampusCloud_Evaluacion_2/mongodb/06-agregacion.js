use CampusCloud;

db.detalles_servicios.aggregate([
  { $group: { _id: "$categoria", total_servicios: { $sum: 1 } } },
  { $sort: { total_servicios: -1 } }
]);