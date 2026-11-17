CREATE (s1:Servicio {id: 101, nombre: "Laboratorio de Cómputo", categoria: "Infraestructura"})
CREATE (s2:Servicio {id: 102, nombre: "Préstamo de Proyector", categoria: "Equipamiento"})
CREATE (u1:Usuario {id: 1, nombre: "Andrea", rol: "Estudiante"})
CREATE (u2:Usuario {id: 2, nombre: "Docente Ing", rol: "Profesor"})
CREATE (u1)-[:SOLICITA {fecha: "2026-11-16", estado: "Aprobada"}]->(s1)
CREATE (u2)-[:SOLICITA {fecha: "2026-11-16", estado: "Aprobada"}]->(s2)
RETURN s1, s2, u1, u2;
