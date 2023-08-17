CREATE DATABASE pruebaISTE; 

CREATE TABLE productos (
    id SERIAL PRIMARY KEY, 
    nombre VARCHAR (15),
    descripcion  VARCHAR(50),
    precio DECIMAL (5,2),
    cantidad_stock INT
);

INSERT INTO productos (nombre, descripcion,precio,cantidad_stock) VALUES ('Zapatos','zapatos negros', 5, 6);