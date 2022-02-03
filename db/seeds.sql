-- inserting values into deparment table
INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Finance"),
       ("Legal"),
       ("Production"),
       ("Customer Service"),
       ("Engineering");

-- Inserting values into Roles table
INSERT INTO roles (title, salary)
VALUES ("Recruiter",40000.00),
       ("Accountant",74000.00),
       ("Lawyer",87000.00),
       ("Assembler",27000.00),
       ("Support",30000.00),
       ("Software Engineer",100000.00);

-- Inserting values into employees table
INSERT INTO employees (first_name, last_name)
VALUES ("Alexis", "Frost"),
       ("Emily", "Straw"),
       ("John", "Snow"),
       ("Barry", "Allen"),
       ("Daniela", "Olivares"),
       ("Bruce", "Wayne");

SELECT * FROM employees_db.deparment;

