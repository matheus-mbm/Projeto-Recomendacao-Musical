CREATE DATABASE romantify;

USE romantify;

CREATE TABLE favoritos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    musicaId BIGINT,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


CREATE TABLE favoritos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    musicaId INT,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);



SELECT * FROM favoritos