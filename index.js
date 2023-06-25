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
        type: 'input',
        message: 'What is the luicense for your project?',
        name: 'license',
    },
    {
    choices:["MIT",new inquirer.Separator(),"APACHE 2.0",new inquirer.Separator(),"GPL 3.0",new inquirer.Separator(),"BSD 3",new inquirer.Separator(),"None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
