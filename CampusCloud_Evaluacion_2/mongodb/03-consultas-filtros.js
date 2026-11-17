use CampusCloud;

// Filtro 1: Por categoría y disponibilidad
db.detalles_servicios.find({ categoria: "Infraestructura", disponible: true });

// Filtro 2: Búsqueda dentro de un arreglo (etiquetas)
db.detalles_servicios.find({ etiquetas: "nosql" });

// Filtro 3: Consulta sobre atributo de subdocumento
db.detalles_servicios.find({ "especificaciones.modalidad": "Híbrida" });