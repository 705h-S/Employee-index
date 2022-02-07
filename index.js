// dependencies
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
const { printTable } = require('console-table-printer');


function prompts (){
    inquirer.prompt([     
        {
            type:"list",
            name:"choice",
            message: "What would you like to view?",
            choices:[

                {
                    name: "View all Deparments",
                    value: "View_deparments"
                },
                {
                    name: "View all Roles",
                    value: "View_roles"
                },
                {
                    name: "View all Employees",
                    value:"View_employees"
                },
                {
                    name: "Add Deparment",
                    value: "Add_deparment"
                },
                {
                    name: "Add Role",
                    value: "Add_role"
                },
                {
                    name: "Add Employee",
                    value: "Add_employee"
                },

            ],  
        },
    ])
    .then ( answers =>{
        console.log(answers);
        switch (answers.choice){

            case "View_deparments":
                Vdeparments();
            break ;

            case "View_roles":
                Vroles();
            break ;

            case "View_employees":
                Vemployees();
            break ;

            case "Add_deparment":
                Adeparment();
            break ;

            case "Add_role":
                Addrole();
            break ;    
            
            case "Add_employee":
                Aemployee();
            break ;    
        }
    } );
};

// display deparments
function Vdeparments (){ 
    db.query (
    `SELECT name as Deparments
    FROM department`, function (err, res) {
        printTable(res);
        console.log(err);
    })
};
// display roles
function Vroles (){ 
    db.query (
    `SELECT roles.title, department.name AS Deparments, roles.salary  
    FROM roles
    JOIN department ON roles.department_id = department.id`, function (err, res) {
        printTable(res);
        console.log(err);
    })
};
// display employees
function Vemployees (){ 
    db.query (
    `SELECT employees.id, CONCAT(employees.first_name," ",employees.last_name) AS Employee, roles.title AS Role, department.name AS Department, roles.salary, CONCAT(em.first_name," ",em.last_name) as Manager
    FROM employees
    JOIN roles ON employees.roles_id = roles.id
    JOIN department ON roles.department_id = department.id
    LEFT JOIN employees em ON employees.manager_id = em.id`, function (err, res) {
        printTable(res);
        console.log(err);
    })
};


prompts()