USE campuscloud_logs;
-- Eliminación de registro específico por clave primaria
DELETE FROM eventos_servicios WHERE servicio_id = 102 AND fecha_evento = '2026-11-16 21:00:00+0000' AND evento_id = uuid();
