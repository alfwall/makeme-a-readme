// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("GENERATING MARKDOWN")
  return `# ${data.title}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribution Guidelines](#contribution-guidelines)
  6. [Testing](#testing)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution Guidelines
  ${data.contribute}

  ## Testing
  ${data.testing}
`;
}

module.exports = generateMarkdown;
