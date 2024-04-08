// Just for reference, the license options
const knownLicenses = [
  "Apache 2.0", 
  "GNU GPL v3",
  "MIT",
  "PDDL"
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GNU GPL v3":
      return "https://img.shields.io/badge/License-GPL%20v3-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "PDDL":
      return "https://img.shields.io/badge/License-PDDL-brightgreen.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU GPL v3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "PDDL":
      return "https://opendatacommons.org/licenses/pddl/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let image = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  return `[![License: ${license}](${image})](${link})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("GENERATING MARKDOWN")
  return `# ${data.title}

  ## License
  ${renderLicenseSection(data.license)}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions
  Reach me on:
  - GitHub: https://github.com/${data.githubUser}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
