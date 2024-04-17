#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 2512;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]
);

if(pinAnswer.pin === myPin){
 
console.log("Correct Pin");


let operationAns = await inquirer.prompt(
    [
        {
            name: "operartion",
            message: 'Please select an option',
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]
);

if (operationAns.operartion === "Withdraw") {
    
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Please enter amount",
                type: "number"
            }
        ]
    );

        if (amountAns.amount>myBalance){

    console.log("Your balance is insufficient!");
    

    } else{
            console.log(`Your remaining balance is ${myBalance-=amountAns.amount} `);
    }
};

if (operationAns.operartion == "Fast Cash") {

    let fastCashAmount = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Please select amount",
                type: "list",
                choices: ["500", "1000", "5000", "10000"]
            }
        ]
    )
    console.log(`Your remaining balance is ${myBalance - fastCashAmount.amount}`);

};

if (operationAns.operartion === "Check Balance") {
    console.log(`Your balance is ${myBalance}`);
};

 }else{
    console.log("Incorrect Pin");
};








