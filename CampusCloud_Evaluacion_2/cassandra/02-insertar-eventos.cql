USE campuscloud_logs;
INSERT INTO eventos_servicios (servicio_id, fecha_evento, evento_id, usuario, accion, estado) VALUES (101, toTimestamp(now()), uuid(), 'Andrea', 'RESERVA_LABORATORIO', 'ACTIVO');
INSERT INTO eventos_servicios (servicio_id, fecha_evento, evento_id, usuario, accion, estado) VALUES (102, toTimestamp(now()), uuid(), 'Docente Ing', 'PRESTAMO_PROYECTOR', 'ACTIVO');
