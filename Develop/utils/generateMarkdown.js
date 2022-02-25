// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation-instructions)
  - [Usage](#usage-information)
  - [Contributing](#contributing-guidelines)
  - [Tests](#test-instructions)
  - [License](#license)
  - [Deployed application](#deployed-application)
  - [GitHub repository](#github-repository)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## License
  ${renderLicenseSection(data.license)}

  ## The URL of the deployed application
  ${data.urldeployed}

  ## The URL of the GitHub repository
  ${data.urlgithub}

  ## Questions
  If you have any additional quesitons then please get in touch via github or email. Thank you.
  - Github - https://github.com/${data.github}
  - Email address - ${data.email}`;
}

module.exports = generateMarkdown;
