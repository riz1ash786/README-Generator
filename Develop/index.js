// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(`./utils/generateMarkdown.js`);
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter a project title",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the project",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license",
    choices: [
      "afl-3.0agpl-3.0",
      "apache-2.0",
      "bsd-0-clause",
      "cc-by-sa-4.0",
      "ecl-2.0",
      "epl-2.0",
      "eupl-1.2",
      "gpl-3.0",
      "lgpl-3.0",
      "mit",
      "mpl-2.0",
      "ms-pl",
      "ms-rl",
      "osl-3.0",
      "N/A",
    ],
    default: 9,

    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contribution guidelines",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Enter the test instructions",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "urldeployed",
    message: "Enter the URL of the deployed application",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
  {
    type: "input",
    name: "urlgithub",
    message: "Enter the URL of the GitHub repository",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        return "Please complete this field";
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("readme successfully generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
