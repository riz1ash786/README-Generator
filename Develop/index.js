// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(`./utils/generateMarkdown.js`);
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title",
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
    type: "input",
    name: "installation",
    message: "Enter installation instructions",
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
    message: "Enter usage information",
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
    message: "Enter contribution guidelines",
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
    message: "Enter test instructions",
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
    err ? console.log(err) : console.log("success!")
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
