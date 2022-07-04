// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter Project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project breifly.',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter some description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide installation instructions',
            validate: installInput => {
                if(installInput) {
                    return true;
                } else {
                    console.log('Please tell us how to install your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please explain your usage rights');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contrib',
            message: 'Explain your contribution guidlines',
            validate: contribInput => {
                if(contribInput) {
                    return true;
                } else {
                    console.log('Please explain your contribuiton guidlines');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Explain your test instructions',
            validate: testingInput => {
                if(testingInput) {
                    return true;
                } else {
                    console.log('Please explain how to test your project');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose to add a license',
            choices: ['MIT', 'GPLv2', 'Apache', 'Unlicense', 'None']
        },
        {
            type: 'confirm',
            name: 'confirmQuestion',
            message: 'Would you like to include a Question section?',
            default: true
        },
        {
            type: 'input',
            name: 'gitHubUsername',
            message: 'Please enter your Github username for people to contact you',
            validate: gitHubUsernameInput => {
                if(gitHubUsernameInput) {
                    return true;
                } else {
                    console.log('Please enter Github username for question section:')
                    return false;
                }
            },
            when: ({ confirmQuestion }) => {
                if(confirmQuestion) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email for people to contact you',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter Github username for question section:')
                    return false;
                }
            },
            when: ({ confirmQuestion }) => {
                if(confirmQuestion) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        
    ])
}

const mockData = {
    title: 'Build a Site',
    description: 'This is a description about the site',
    install: 'This is how you install the site',
    usage: 'this is how you are allowed to use the site',
    contrib: 'this is hwo you can contribuite to the site',
    testing: 'this is how you test the project',
    license: 'MIT'
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    //page we are building then passing into writefile
    const pageHTML = generateMarkdown(data);

    fs.writeFile(fileName, pageHTML, err =>{
        if(err) throw new Error(err);

        console.log('ReadMe Generated');
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(projectData => {
            writeToFile('YOUR README.md', projectData);
        })


    //build page with mock data

    // writeToFile('YOUR README.md', mockData);
        
}

// Function call to initialize app
init();