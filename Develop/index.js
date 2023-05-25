function init () {

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
let tools = ['CSS Library', 'Google Font', 'Third Party API', 'Web Server API', 'Jquery', 'DayJS', 'Node.js', 'Others' ];

const licenses = ['Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0', 'BSD 2-clause "Simplified"',
'BSD 3-clause "New" or "Revised"','BSD 3-clause Clear license','BSD Zero-Clause license','Creative Commons license family',
'Creative Commons Zero v1.0 Universal','Creative Commons Attribution 4.0','Creative Commons Attribution Share Alike 4.0','Do What The F*ck You Want To Public License','Educational Community License v2.0',
'Eclipse Public License 1.0', 'Eclipse Public License 2.0','European Union Public License 1.1','GNU Affero General Public License v3.0','GNU General Public License family','GNU General Public License v2.0',
'GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c',
'Microsoft Public License','MIT','Mozilla Public License 2.0','Open Software License 3.0','PostgreSQL License','SIL Open Font License 1.1','University of Illinois/NCSA']

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'What is the description? Must answer: motivation? problem to solve? What did you learn?',
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
        message: 'Insert the screenshot path',
        name: 'screenshot',
        prefix: '![alt text]',
        validate: function (answer) {
            if (answer.length < 5) {
                return console.log("The answer must contain a URL.");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: 'How users can use this app?',
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
        message: 'What is the functionalities? Must describe: built in features, elements to highlight' ,
        name: 'functionalities',
        validate: function (answer) {
            if (answer.length < 20) {
                return console.log("The answer must contain more than 20 characters.");
            }
            return true;
        }
      },
    {
      type: 'checkbox',
      message: 'What tools do you use? You can check it out more than one',
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
      type: 'list',
      message: 'License used',
      name: 'licenses',
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
        message: 'Test Instructions: Provide instructions on how to run the app. Commands or configurations required.',
        name: 'test',
        validate: function (answer) {
            if (answer.length < 10) {
                return console.log("The answer must contain more than 10 characters.");
            }
            return true;
        }
      },

      {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'contribute',
        validate: function (answer) {
            if (answer.length < 20) {
                return console.log("The answer must contain more than 20 characters.");
            }
            return true;
        }
      }, /// missing email, link github added in question - CONTRIBUTE CHANGES TO QUESTION
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets, tutorials, others',
        name: 'credits',
        validate: function (answer) {
            if (answer.length < 10) {
                return console.log("The answer must contain more than 10 characters.");
            }
            return true;
        }
      },



      
  
   
  ])

  
 /* .then((response) =>
  writeToFile('README.md','response'), (err) =>
  err ? console.error(err) : console.log('Commit logged!'));
*/

.then((response) => {
    const readmeContent = `
# ${response.title}

## Description
${response.description}

## Installation 
${response.gettingStarted}

## Screenshot
${response.screenshot}

## Usage
${response.usage}

## Functionalities
${response.functionalities}

## Tools Used
${response.toolsUsed}

## License
${response.licenses}

## Test
${response.test}

## How to Contribute  
${response.contribute} 

## Credits
${response.credits}


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

}


init ();

/* TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/


