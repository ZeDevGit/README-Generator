const inquirer = require('inquirer');
const colors = require('colors');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'method',
        },
    ])
    .then((response) =>
        console.log(`Your name is ${colors.brightMagenta(response.username)}`, `\nYou speak ${colors.brightMagenta(response.languages)}`, `\nYour preferred method of communication is ${colors.brightMagenta(response.method)}`)
    );
