const inquirer = require('inquirer');
const fs = require('fs');

//Function to create and format the README.md page using user submitted data
function createMarkdown(data) {
    return `# ${data.projectTitle}\n`
      + `## Description \n ${data.description}\n`
      + `## Table of Contents\n  
      - [Installation](#installation)\n  
      - [Usage](#usage)\n 
      - [Contributing](#contributing)\n  
      - [Tests](#tests)\n 
      - [Questions](#questions)\n`
      + `## Installation\n ${data.installation}\n`
      + `## Usage\n ${data.usage}\n`
      + `## Contributing\n ${data.contributing}\n`
      + `## Tests\n ${data.tests}\n`
      + `## Questions\n [${data.questions}](https://github.com/${data.questions})\n`;
  }

// Creates the file and inputs the data that was inserted into createMarkdown()
function writeToFile(fileName, data) {
    const content = createMarkdown(data);
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File created!');
    });

}

// Using inquirer the user information is collected for the README.md file
function getUserInfo() {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Enter a description for your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions for your project',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter examples for use of your project',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Describe how other developers can contribute towards your project',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Enter examples of how you can run tests for your project',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter your github username',
            name: 'questions',
        },
    ])
    .then((data) => {
        writeToFile('README.md', data);
    });
}

// Initializes the main prompt function to get user data
getUserInfo();