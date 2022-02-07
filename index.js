// dependencies
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');


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

// Functions after user selects option
function Vdeparments (){ 
    db.query (
    "SELECT * FROM department", function (err, res) {
        console.log(res);
        console.log(err);
    })
}

function Vroles (){ 
    db.query (
    "SELECT * FROM roles", function (err, res) {
        console.log(res);
        console.log(err);
    })
}

prompts()