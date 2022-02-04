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
VALUES ("Recruiter",40000.00, 1),
       ("HR Manager",60000, 1), 
       ("Accountant",74000.00, 2),
       ("Chief financial officer", 90000, 2),
       ("Lawyer",87000.00, 3),
       ("Assembler",27000.00, 4),
       ("Assembly Supervisor", 35000, 4),
       ("Support",30000.00, 5),
       ("Chief Customer Service", 40000, 5),
       ("Software Engineer",100000.00, 6),
       ("senior Software Enineer",200000, 6);

-- Inserting values into employees table
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Alexis", "Frost", 2, NULL),
       ("Emily", "Straw", 1, 1),
       ("John", "Snow", 4, NULL),
       ("Morty", "Sanchez", 3, 3),
       ("Barry", "Allen", 7, NULL),
       ("BomBon", "Camacho", 6, 5),
       ("Daniela", "Olivares", 9, NULL),
       ("Joshua", "Meza", 8, 7),
       ("Bruce", "Wayne", 11, NULL),
       ("Dick", "Grayson", 10, 9),
       ("Phoenix", "Wright", 5, NULL);


SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;

