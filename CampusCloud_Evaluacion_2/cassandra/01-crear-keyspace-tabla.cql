CREATE KEYSPACE IF NOT EXISTS campuscloud_logs WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE campuscloud_logs;
CREATE TABLE IF NOT EXISTS eventos_servicios (
    servicio_id int,
    fecha_evento timestamp,
    evento_id uuid,
    usuario text,
    accion text,
    estado text,
    PRIMARY KEY ((servicio_id), fecha_evento, evento_id)
) WITH CLUSTERING ORDER BY (fecha_evento DESC);
