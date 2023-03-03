CREATE DATABASE PETS_HEALTH;
USE PETS_HEALTH;

CREATE TABLE OWNER_USER(
ID int unsigned auto_increment,
NOME varchar(100) not null,
USER_NAME varchar(100) not null,
EMAIL varchar(100) not null,
TELEFONE char(15),
FOTO_PERFIL varchar(80),
SENHA  varchar(100) not null,
PRIMARY KEY(ID)
)ENGINE=INNODB;