CREATE DATABASE employeetracker_db;

USE employeetracker_db;

--Departments
CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

