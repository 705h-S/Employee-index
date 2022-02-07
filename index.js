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
                    name: "View Deparments",
                    value: "View_deparments"
                },
                {
                    name: "View Roles",
                    value: "View_roles"
                },

            ]
        }
    ])
    .then ( answers =>{
        console.log(answers);
        // if( answers.choice === "View_deparments"){
        //     Vdeparments();
        // }
        switch (answers.choice){
            case "View_deparments":
                Vdeparments();
            break ;
            case "View_roles":
                Vroles();
            break ;
            
        }
    } );
};


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