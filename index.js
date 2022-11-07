// TODO: Include packages needed for this application
const packageJ = require('../Professional-README-Generator/package.json');
const fs = require('fs');
const util = require('../Professional-README-Generator/utils/generateMarkdown');
const { default: inquirer } = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "what is your Github user name?",
        default: 'Github user name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Github user name is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "what is your Github repo?",
        default: 'Github repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Github repo is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is the title of your project?",
        default: 'project title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    }, {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for you project?'
    }, {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?'
    }, {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?'
    }, {
        type: 'input',
        name: 'test',
        message: 'What are the test instruction for your project?'
    }, {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project?',
        choices: ['MIT', 'ISC', 'GNU LGPL', 'Unlicense', 'none'],
        default: 'MIT'
    }
    .then(input => {
        return input;
    })
];

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile, data, err => {
        return console.log(err);
    }

    console.log("Congratulations! Your README.md file was successful and has been generated!")
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();