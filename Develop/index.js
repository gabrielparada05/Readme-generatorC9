// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
let tools = ['CSS Library', 'Google Font', 'Third Party API', 'Web Server API', 'Jquery', 'DayJS', 'Others' ];
let communicationMet = ['Email', 'Mail', 'Phone', 'Fax', 'Facebook'];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title'
    },
    {
        type: 'input',
        message: 'How users can get start this app?',
        name: 'gettingStarted',
        validate: function (answer) {
            if (answer.length < 20) {
                return console.log("The answer must contain more than 20 characters.");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: 'screenshot',
        name: 'screenshot',
        default: '![alt text]',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("The answer must contain a URL.");
            }
            return true;
        }
      },

    {
        type: 'input',
        message: 'What is the description? Must answer: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'description'
      },
      {
        type: 'input',
        message: 'What is the functionalities? Must describe: built in features, important elements to highlight  ' ,
        name: 'functionalities'
      },
    {
      type: 'checkbox',
      message: 'What tools do you use? You can check it out more than one. If you used another one, you can add when the readme file will be created',
      name: 'toolsUsed',
      choices: tools
    }, 
    {
        type: 'input',
        message: 'How users can use this app?',
        name: 'usage'
      },
      {
        type: 'input',
        message: 'How users can collaborate with this app? Refer Repository URL',
        name: 'contribute'
      },
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
        name: 'credits'
      },
  
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'communication',
      default:'Email',
      choices:communicationMet
    },
  ])
 /* .then((response) =>
  writeToFile('README.md','response'), (err) =>
  err ? console.error(err) : console.log('Commit logged!'));
*/

.then((response) => {
    const readmeContent = `
#${response.title}

## Getting Started
${response.gettingStarted}

## Screenshot
${response.screenshot}

## Description
${response.description}

## Functionalities
${response.functionalities}

## Tools Used
${response.toolsUsed}

## Usage
${response.usage}

## How to Contribute
${response.contribute}

## Credits
${response.credits}

## Preferred Method of Communication
${response.communication}
`;
    writeToFile('README.md', readmeContent);
  });

  // TODO: Create a function to write README file

function writeToFile(file, data) {
  fs.writeFile(file, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file created!');
    }
  });
}



/* TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/