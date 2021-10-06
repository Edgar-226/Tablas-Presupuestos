CREATE DATABASE presupuestos

USE presupuestos

CREATE TABLE users
(
  id_user int NOT NULL IDENTITY(1,1),
  [user] CHAR(30) NOT NULL,
  [name] CHAR(30) NOT NULL,
  last_name CHAR(30) NOT NULL,
  email CHAR(35) NOT NULL,
  [password] CHAR(100) NOT NULL,
  tel int NOT NULL,
  PRIMARY KEY (email)
)
SELECT *
FROM users


INSERT INTO users
  ([user],[name],last_name,email,[password],tel)

VALUES

  ('cinthyaUser', 'cinthya', 'miranda', 'cinthya@mail.com', 'cinthyapass', 22222222),
  ('edgarUser', 'edgar', 'bastida', 'edgar@mail.com', 'edgarpass', 33333333);

SELECT [user], email, [name]
FROM users
WHERE [user] ='cinthyaUser' AND [password] = 'cinthyapass'


CREATE TABLE presupuestos
(
  idPresupuesto INT NOT NULL IDENTITY (1,1),
  creacion DATE NOT NULL,
  proyecto CHAR (35) NOT NULL,
  [version] INT NOT NULL,
  PRIMARY KEY (idPresupuesto)
)

CREATE TABLE flujoEfectivo
(
  idFlujo INT NOT NULL IDENTITY (1,1),
  idPresupuesto INT NOT NULL,
  mes INT NOT NULL,
  ingreso FLOAT NOT NULL,
  PRIMARY KEY (idFlujo),
  FOREIGN KEY(idPresupuesto) REFERENCES presupuestos(idPresupuesto)
)

CREATE TABLE ingresos
(
  idIngreso INT NOT NULL IDENTITY (1,1),
  idPresupuesto INT NOT NULL,
  concepto CHAR(35) NOT NULL,
  mes INT NOT NULL,
  ingreso FLOAT NOT NULL,
  PRIMARY KEY (idIngreso),
  FOREIGN KEY(idPresupuesto) REFERENCES presupuestos(idPresupuesto)
)

CREATE TABLE costosDirectos
(
  idCosto INT NOT NULL IDENTITY (1,1),
  idPresupuesto INT NOT NULL,
  concepto CHAR(35) NOT NULL,
  mes INT NOT NULL,
  costo FLOAT NOT NULL,
  PRIMARY KEY (idCosto),
  FOREIGN KEY(idPresupuesto) REFERENCES presupuestos(idPresupuesto)

)

CREATE TABLE gastosAdministrativos
(
  idGasto INT NOT NULL IDENTITY (1,1),
  idPresupuesto INT NOT NULL,
  concepto CHAR(35) NOT NULL,
  mes INT NOT NULL,
  gasto FLOAT NOT NULL,
  PRIMARY KEY (idGasto),
  FOREIGN KEY(idPresupuesto) REFERENCES presupuestos(idPresupuesto)

)

CREATE TABLE recursos
(
  idRecurso INT NOT NULL IDENTITY (1,1),
  idPresupuesto INT NOT NULL,
  rol INT NOT NULL,
  recurso FLOAT NOT NULL,
  porcentaje INT NOT NULL,
  mes INT NOT NULL,
  PRIMARY KEY (idRecurso),
  FOREIGN KEY(idPresupuesto) REFERENCES presupuestos(idPresupuesto)
)