function init () {

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const tools = ['CSS Library', 'Google Font', 'Third Party API', 'Web Server API', 'Jquery', 'DayJS', 'Node.js Module', 'Others' ];
const licenses = ['GNU General Public License v2.0', 'MIT', 'Mozilla Public License 2.0'
,'GNU General Public License v3.0','Unlicense', 'The Artistic License 2.0', 'IBM Public License Version 1.0']


/// Questions 

inquirer
  .prompt([
   {
      type: 'input',
      message: 'What is the title?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'What is the description? Must answer: motivation? Problem to solve? What did you learn?',
      name: 'description',
      validate: function (answer) {
          if (answer.length < 30) {
              return console.log("The answer must contain more than 30 characters.");
          }
          return true;
      }
    },
    {
        type: 'input',
        message: 'How can users get started with this app?',
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
        message: 'Insert the screenshot path',
        name: 'screenshot',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("The answer must contain a URL.");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: 'How can users use this app?',
        name: 'usage',
        validate: function (answer) {
            if (answer.length < 20) {
                return console.log("The answer must contain more than 20 characters.");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: 'What are the functionalities? Must describe: built-in features, and elements to highlight' ,
        name: 'functionalities',
        validate: function (answer) {
            if (answer.length < 10) {
                return console.log("The answer must contain more than 10 characters.");
            }
            return true;
        }
      },
    {
      type: 'checkbox',
      message: 'What tools do you use? You can check out more than one',
      name: 'toolsUsed',
      choices: tools,
      validate: function (answer) {
        if (answer.length === 0) {
            return console.log("Pick at least one!");
        }
        return true;
    }
    },
    {
      type: 'input',
      message: 'If you want to specify the used tolls, provide the details. Otherwise, press enter to continue',
      name: 'toolsDescription',
    },
    {
      type: 'list',
      message: 'License used',
      name: 'license',
      choices:licenses,
      validate: function (answer) {
        if (answer.length === 0) {
            return console.log("Select one!");   
        }
        return true;
    }
    },
      {
        type: 'input',
        message: 'Test Instructions: Provide instructions on how to run the app. Commands or configurations required. The URL.',
        name: 'test',
        validate: function (answer) {
            if (answer.length < 20) {
                return console.log("The answer must contain more than 20 characters.");
            }
            return true;
        }
      },

      {
        type: 'input',
        message: 'Enter your Repo URL', 
        name: 'repoUrl',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("The answer must contain more than 5 characters.");
            }
            return true;
        }
      },

      {
        type: 'input',
        message: 'Enter your GitHub username', 
        name: 'gitHubUserName',
        validate: function (answer) {
            if (answer.length < 2) {
                return console.log("The answer must contain more than 2 characters.");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
        validate: function (answer) {
          if (emailValidator.validate(answer)) {
            return true;
          } else {
            return 'Invalid email. Please enter a valid email address.';
          }
        }
  },
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets, tutorials, others',
        name: 'credits',
        validate: function (answer) {
            if (answer.value < 10) {
                return console.log("The answer must contain more than 10 characters.");
            }
            return true;
        }
      },
  ])

///generate response and print the readme file
.then((response) => {

  ///print the license badge and link
  let yourLicense = `${response.license}`
  const markLicense = generateMarkdown(yourLicense)
 
  
  const readmeContent = `
${markLicense}

# ${response.title}

## Description
${response.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Screenshot path](#screenshot-path)
- [Usage](#usage)
- [Functionalities](#functionalities)
- [Tools Used](#tools-used)
- [License](#license)
- [Test](#test)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)
- [Credits](#credits)

## Installation 
${response.gettingStarted}

## Screenshot path
A screenshot is available ![alt text](${response.screenshot})

## Usage
${response.usage}

## Functionalities
${response.functionalities}

## Tools Used
${response.toolsUsed}
${response.toolsDescription}

## License
${markLicense}

## Test
${response.test}

## How to Contribute  
Users can collaborate with this project at ${response.repoUrl}.

## Questions 
 Email: [gabrielparada05@gmail.com](mailto:${response.email}). Or, through my GitHub profile ${response.gitHubUserName}, available at https://github.com/${response.gitHubUserName}.


## Credits
${response.credits}

`;
  ///call function create the readme file
    writeToFile('README.md', readmeContent);
  });

  //Create the readme file
  function writeToFile(file, data) {
    fs.writeFile(file, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file created!');
      }
    });
  }
  
}


init();



