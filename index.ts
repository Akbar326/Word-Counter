#! /usr/bin/env node

import inquirer from "inquirer"

const answers: {
    sentece: string
} = await inquirer.prompt([
    {
        name: "sentece",
        type: "input",
        message: "Enter your sentece to count the word: "
    }
])

const words = answers.sentece.trim().split(" ");

console.log(words);

console.log(`Your sentece has ${words.length} words`)