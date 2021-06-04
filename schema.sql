DROP DATABASE IF EXISTS employeetracker_db;
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
);

--Employee
CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (ID)
);

SELECT name 
FROM departments 
LEFT JOIN role 
ON department.id = role.department_id;

SELECT title, salary, department_id 
FROM role 
LEFT JOIN department 
ON role.department_id = department.id;

SELECT first_name, last_name, role_id, manager_id 
FROM employee 
JOIN role 
ON employee.role_id = role.department_id;