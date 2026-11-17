MATCH (u:Usuario)-[r:SOLICITA]->(s:Servicio) RETURN u, r, s;
MATCH (u:Usuario {rol: "Estudiante"})-[r:SOLICITA]->(s:Servicio)
RETURN u.nombre AS Usuario, s.nombre AS Servicio, r.fecha AS Fecha;
