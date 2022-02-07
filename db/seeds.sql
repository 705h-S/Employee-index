-- inserting values into deparment table
INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Finance"),
       ("Legal"),
       ("Production"),
       ("Customer Service"),
       ("Engineering");

-- Inserting values into Roles table
INSERT INTO roles (title, salary, department_id)
VALUES -- 1
       ("HR Manager",60000, 1),
    --    2
       ("Chief financial officer", 90000, 2),
    --    3
       ("Assembly Supervisor", 35000, 4),
    --    4
       ("Chief Customer Service", 40000, 5),
    --    5
       ("senior Software Enineer",200000, 6),
    --    6
       ("Lawyer",87000.00, 3),
    --    7
       ("Recruiter",40000.00, 1),
-- 8
       ("Accountant",74000.00, 2),
-- 9
       ("Assembler",27000.00, 4),
-- 10
       ("Support",30000.00, 5),
-- 11
       ("Software Engineer",100000.00, 6);

-- Inserting values into employees table
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Alexis", "Frost", 1, NULL),
       ("John", "Snow", 2, NULL),
       ("Barry", "Allen", 3, NULL),
       ("Daniela", "Olivares", 4, NULL),
       ("Bruce", "Wayne", 5, NULL),
       ("Phoenix", "Wright", 6, NULL),
       ("Emily", "Straw", 7, 1), 
       ("Morty", "Sanchez", 8, 2),
       ("BomBon", "Camacho", 9, 3),
       ("Joshua", "Meza", 10, 4),
       ("Dick", "Grayson", 11, 5);
       


SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;

