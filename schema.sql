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
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT (100),
    PRIMARY KEY (ID)
)

--Employee
CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (ID)
)