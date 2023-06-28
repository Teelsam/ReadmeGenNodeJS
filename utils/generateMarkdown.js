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
  console.log("GenerateMarkdown has been called.");



  return `# ${data.title}\n 
## Table of Contents
- [Project Details](#Description)
- [Project Installation](#Installation)
- [Project Usage](#Usage)
- [Project Contribution](#Contribution)
- [Project Tests](#Tests)
- [Project Contact Info](#ContactInfo)
- [Project License](#License)

## Description
${data.descript}

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests 
${data.test}

## ContactInfo 
${data.username}
${data.email}
          
## License
${data.license}`;
}

module.exports = generateMarkdown;
