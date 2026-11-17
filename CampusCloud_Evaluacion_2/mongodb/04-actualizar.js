use CampusCloud;

// Antes de actualizar
db.detalles_servicios.findOne({ servicio_sql_id: 105 });

// Actualización controlada
db.detalles_servicios.updateOne(
  { servicio_sql_id: 105 },
  { $set: { disponible: true }, $push: { etiquetas: "disponible-pronto" } }
);

// Después de actualizar
db.detalles_servicios.findOne({ servicio_sql_id: 105 });