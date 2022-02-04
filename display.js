const connection = require("./db/connection");

class employeeDB {

    constructor(connection) {
        this.connection = connection;
    }

    // Show all employees
    allEmployees() {
        return this.connection.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN role on employees.roles_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employees manager on manager.id = employees.manager_id;"
        );
    }

    // Add an employee
    addEmployee(employees) {
        return this.connection.promise().query("INSERT INTO employees SET ?", employees);
    }

    // Update the given employee's role
    updateEmployeeRole(employeesId, rolesId) {
        return this.connection.promise().query(
            "UPDATE employees SET roles_id = ? WHERE id = ?",
            [rolesId, employeesId]
        );
    }


    // Show all managers
    allManagers(employeesId) {
        return this.connection.promise().query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeesId
        );
    }

    // Show all roles
    allRoles() {
        return this.connection.promise().query(
            "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department.id;"
        );
    }

    // Create a new role
    addRole(roles) {
        return this.connection.promise().query("INSERT INTO roles SET ?", roles);
    }

    // Show all departments
    allDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department;"
        );
    }

    // Add a department
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }

}

module.exports = new employeeDB(connection);
