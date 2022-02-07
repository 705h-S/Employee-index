// dependencies
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
const { printTable } = require('console-table-printer');

var deps = [
" ",    
"Human Resources",
"Finance",
"Legal",
"Production",
"Customer Service",
"Engineering"
];
var rolls = [
    " ",
    "HR Manager",
    "Chief financial officer",
    "Assembly Supervisor",
    "Chief Customer Service",
    "senior Software Enineer",
    "Lawyer",
    "Recruiter",
    "Accountant",
    "Assembler",
    "Support",
    "Software Engineer",
];
var boss = [
    " ",
    "Alexis Frost",
    "John Snow",
    "Barry Allen", 
    "Daniela Olivares", 
    "Bruce Wayne", 
    "Phoenix Wright", 
    "Emily Straw",  
    "Morty Sanchez", 
    "BomBon Camacho", 
    "Joshua Meza", 
    "Dick Grayson", 
];

function prompts (){
    inquirer.prompt([     
        {
            type:"list",
            name:"choice",
            message: "What would you like to do?",
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
                {
                    name: "Quit",
                    value: "Quit_program"
                },

            ],  
        },
    ])
    .then ( answers =>{
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
            
            case "Quit_program":
                console.log("Goodbye");
                db.end();
            break ; 
        }
    } );
};

// display deparments
function Vdeparments (){ 
    db.query (
    `SELECT name as Deparments
    FROM department`, function (err, res) {
        if(err){
            console.log(err)
        };
        printTable(res);
        prompts();
    });
};
// display roles
function Vroles (){ 
    db.query (
    `SELECT roles.title, department.name AS Deparments, roles.salary  
    FROM roles
    JOIN department ON roles.department_id = department.id`, function (err, res) {
        if(err){
            console.log(err)
        };
        printTable(res);
        prompts();
    });
};
// display employees
function Vemployees (){ 
    db.query (
    `SELECT employees.id, CONCAT(employees.first_name," ",employees.last_name) AS Employee, roles.title AS Role, department.name AS Department, roles.salary, CONCAT(em.first_name," ",em.last_name) as Manager
    FROM employees
    JOIN roles ON employees.roles_id = roles.id
    JOIN department ON roles.department_id = department.id
    LEFT JOIN employees em ON employees.manager_id = em.id`, function (err, res) {
        if(err){
            console.log(err)
        };
        printTable(res); 
        prompts();
    })
};
// add department
function Adeparment() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "addingDep",
            message: "What's the department you're adding?"
        }
        ])
        .then(answers => {
            deps.push(`${answers.addingDep}`)
            db.query(
                `INSERT INTO department (name)
                VALUES ("${answers.addingDep}")`, function (err, res){
                    if(err){
                        console.log(err)
                    };
                    console.log(`Added ${answers.addingDep} to the list!`);
                    Vdeparments();
                });
        });   
};
// adding role
function Addrole() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "addRoleN",
            message: "What Role are we adding today?"
        },
        {
            type: "input",
            name:"addRoleS",
            message: "What's the salary for this role?"
        },
        {
            type: "list",
            name: "roleDep",
            message: "What department does this role belong too?",
            choices: deps
        }
        ])  
        .then(answers => {
            rolls.push(`${answers.addRoleN}`);
            var depid = deps.indexOf(`${answers.roleDep}`);
            db.query(
                `INSERT INTO roles (title, salary, department_id)
                VALUES ("${answers.addRoleN}", "${answers.addRoleS}","${depid}" )`, function (err, res){
                    if(err){
                        console.log(err)
                    };
                    console.log(`Added ${answers.addRoleN} to the list!`);
                    Vroles();
                });
        });   
};

// add employee
function Aemployee() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "addEmN",
            message: "Please Enter Employees first name"
        },
        {
            type: "input",
            name:"addEmLn",
            message: "What's the Employees last name?"
        },
        {
            type: "list",
            name: "emRole",
            message: "What's the Employee's role?",
            choices: rolls
        },
        {
            type: "list",
            name: "emDep",
            message: "What department does this Employee belong too?",
            choices: deps
        },
        {
            type: "list",
            name: "emBoss",
            message: "Whos the employee's manager?",
            choices: boss
        }

        ])  
        .then(answers => {
            var worker = (`${answers.addEmN}+" "+${answers.addEmLn}`)
            boss.push(worker);
            var rolly = rolls.indexOf(`${answers.emRole}`);
             // if they dont have a boss
        // function noBoss (){
            var manager = boss.indexOf(`${answers.emBoss}`);
            // if(manager !== 0){
                // return "NULL";
            // };
            // return manager;
            // };
            db.query(
                `INSERT INTO employees (first_name, last_name, roles_id, manager_id)
                VALUES ("${answers.addEmN}", "${answers.addEmLn}", "${rolly}", "${manager}" )`, function (err, res){
                    if(err){
                        console.log(err)
                    };
                    console.log(`Added ${answers.addEmN} to the list!`);
                    Vemployees();
                });
        });        
};



prompts()