// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown')

//Inquirer uses these .prompt questions to ask in the terminal and then save the data in .then
inquirer
    .prompt([{
        //questions for making a READMEfile
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
        type: 'list',
        message: 'What is the license for your project?',
        name: 'license',
        choices: ['MIT', "APACHE 2.0", "BSD 3", "None"],
    }])
    .then(data => {
        //here the answers from the questions can be used
        console.log('data is: ', data);
        writeToFile(data);
    })

// Create a function to write README file
function writeToFile(data) {
    // fs.readFile('./utils/generateMarkdown.js', 'utf8', function (err, data) {
    //     console.log('data from readfile: ', data);
    // });
    //the markdown variable here is used as a template later in the writeFile method.
    const markdown = genMarkdown(data);
    console.log('this is genMarkdown(data)):', genMarkdown(data));
    fs.writeFile(
        'myFile.md', markdown, err => err ? console.log(err) : console.log('file success!!')
    );
}


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
