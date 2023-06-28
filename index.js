// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         message: 'What is your Github username?',
//         name: 'username',
//     },
//     {
//         type: 'input',
//         message: 'What is your email?',
//         name: 'email',
//     },
//     {
//         type: 'input',
//         message: 'What is the project title?',
//         name: 'title',
//     },

//     {
//         type: 'input',
//         message: 'Give a short description of your project',
//         name: 'descript',
//     },
//     {
//         type: 'input',
//         message: 'Give a short description of installation instructions',
//         name: 'install',
//     },
//     {
//         type: 'input',
//         message: 'Give a short description of how to use your application',
//         name: 'usage',
//     },
//     {
//         type: 'input',
//         message: 'Give a short description of how to contribute',
//         name: 'contribution',
//     },
//     {
//         type: 'input',
//         message: 'Give a short description of how to testthe app',
//         name: 'test',
//     },
//     {
//         type: 'checkbox',
//         message: 'What is the license for your project?',
//         name: 'license',
//         choices: ['MIT', "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
//     }

// ]
inquirer
    .prompt([{
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
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
        message: 'Give a short description of installation instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Give a short description of how to use your application',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Give a short description of how to contribute',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Give a short description of how to test the app',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'What is the license for your project?',
        name: 'license',
        choices: ['MIT', "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    }])
    .then(data => {
        console.log('data is: ', data);
        writeToFile(data);

    })
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(
        'myFile.md', JSON.stringify(data, null, '\t'), err => err ? console.log(err) : console.log('file success!!')
    );
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
