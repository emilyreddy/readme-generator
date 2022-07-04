// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your project description here:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your project installation instructions here:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your project usage information here:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your project contribution guidelines here:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter your project test instructions here:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select a license',
        choices: [
            'GNU GPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense',
            'BSD 3-Clause'
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username here:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address here:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your README has been successfully created!')
    );
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
