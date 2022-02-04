-- Delete any db with name of employees_db
DROP DATABASE IF EXISTS employees_db;

-- Creating a new or replace employees_db
CREATE DATABASE employees_db;

-- We are going to tell program that we are going to use this employees_db
USE employees_db;

-- first table named department
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- secound table named roles 
CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

-- third table named employees
CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id  INT,
    manager_id INT,
    FOREIGN KEY (roles_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);

