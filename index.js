// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'imput',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your Github email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Give a short description of your project',
        name: 'descript',
    },
    {
        type: 'checkbox',
        message: 'What is the license for your project?',
        name: 'license',
        choices:['MIT', "APACHE 2.0","GPL 3.0","BSD 3","None"],
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
