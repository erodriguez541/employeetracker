CREATE DATABASE employeetracker_db;

USE employeetracker_db;

--Departments
CREATE TABLE departments(
    id INT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

--Role
CREATE TABLE role (
    id INT NOT NULL
)