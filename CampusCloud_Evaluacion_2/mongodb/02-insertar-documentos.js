use CampusCloud;

db.detalles_servicios.insertMany([
  {
    servicio_sql_id: 101,
    nombre: "Laboratorio de Cómputo Avanzado",
    categoria: "Infraestructura",
    disponible: true,
    etiquetas: ["hardware", "gpu", "redes"],
    especificaciones: { edificio: "Docencia 2", capacidad: 35, software: ["Docker", "VS Code"] }
  },
  {
    servicio_sql_id: 102,
    nombre: "Préstamo de Proyector Portátil",
    categoria: "Equipamiento",
    disponible: true,
    etiquetas: ["audiovisual", "hdmi", "aulas"],
    especificaciones: { resolucion: "1080p", accesorios: ["Control", "Cable HDMI", "Maletín"] }
  },
  {
    servicio_sql_id: 103,
    nombre: "Asesoría Académica de Bases de Datos",
    categoria: "Académico",
    disponible: true,
    etiquetas: ["sql", "nosql", "tutoria"],
    especificaciones: { modalidad: "Híbrida", duracion_min: 60, herramientas: ["SQL Server", "MongoDB"] }
  },
  {
    servicio_sql_id: 104,
    nombre: "Instancia Sandbox Cloud Estudiante",
    categoria: "Infraestructura",
    disponible: true,
    etiquetas: ["contenedores", "linux", "nube"],
    especificaciones: { cpu_cores: 2, ram_gb: 4, almacenamiento_gb: 20 }
  },
  {
    servicio_sql_id: 105,
    nombre: "Kit de Robótica y Sensores IoT",
    categoria: "Equipamiento",
    disponible: false,
    etiquetas: ["arduino", "esp32", "sensores"],
    especificaciones: { microcontrolador: "ESP32", incluye_bateria: true }
  },
  {
    servicio_sql_id: 106,
    nombre: "Taller de Preparación Certificación Cloud",
    categoria: "Académico",
    disponible: true,
    etiquetas: ["aws", "azure", "certificacion"],
    especificaciones: { modalidad: "Virtual", sesiones: 8, cupo_max: 50 }
  }
]);