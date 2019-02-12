DROP DATABASE IF EXISTS cost_db;

CREATE DATABASE cost_db;
USE cost_db;

CREATE TABLE cost (
id INTEGER(11) NOT NULL AUTO_INCREMENT,
city VARCHAR(255) NOT NULL,
state VARCHAR(255) NOT NULL,
country VARCHAR(255) NOT NULL,
cli_including_rent DECIMAL(10,2) NOT NULL,
cli DECIMAL(10,2) NOT NULL,

PRIMARY KEY (id)
);

CREATE TABLE college (
id INTEGER(11) NOT NULL AUTO_INCREMENT,
major VARCHAR(255) NOT NULL,
starting_salary DECIMAL(10,2) NOT NULL,
mid_career_salary DECIMAL(10,2) NOT NULL,

PRIMARY KEY (id)
);


SELECT * FROM cost;
SELECT * FROM college;