use CampusCloud;

// Obtiene el _id real del documento 106 y lo elimina por identificador
const docEliminar = db.detalles_servicios.findOne({ servicio_sql_id: 106 });
print("Documento a eliminar:", docEliminar._id);

db.detalles_servicios.deleteOne({ _id: docEliminar._id });

// Verificar que ya no existe
db.detalles_servicios.countDocuments();