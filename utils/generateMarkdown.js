// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    let badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return badge;
  }
  else if (license === 'APACHE 2.0') {
    let badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return badge;
  }
  else if (license === 'BSD 3') {
    let badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    return badge;
  }
  else () => "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    let link = '[License: MIT](https://opensource.org/licenses/MIT)'
    return link;
  }
  else if (license === 'APACHE 2.0') {
    let link = '[License: APACHE 2.0](https://opensource.org/licenses/Apache-2.0)'
    return link;
  }
  else if (license === 'BSD 3') {
    let link = '[License: BSD 3](https://opensource.org/licenses/BSD-3-Clause)'
    return link;
  }
  else () => "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license)
  return 
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
- [Project Questions](#Questions)
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

## Questions 
[github  link](https://github.com/${data.username})
[My Email] ${data.email}
You can email me with inquiries and report bugs, please allow 1 weeks time before replies.
          
## License
${data.license}`;
}

module.exports = generateMarkdown;
