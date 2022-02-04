SELECT title, salary, name
FROM roles
JOIN department ON department.id = roles.department_id;

