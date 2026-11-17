MATCH (u:Usuario {id: 1})-[r:SOLICITA]->(s:Servicio {id: 101})
SET r.estado = "Completada"
RETURN u, r, s;
