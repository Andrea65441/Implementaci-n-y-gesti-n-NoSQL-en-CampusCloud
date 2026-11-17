USE campuscloud_logs;
-- Actualización filtrada por clave primaria completa
UPDATE eventos_servicios SET estado = 'COMPLETADO' WHERE servicio_id = 101 AND fecha_evento = '2026-11-16 21:00:00+0000' AND evento_id = uuid();
