// a function that returns a license badge based on which license is passed in

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
  else () => " ";

}

// a function that returns the license link

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

//  a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license)
//     return
// }

//  a function to generate markdown for README
function generateMarkdown(data) {
  console.log("GenerateMarkdown has been called.");
  //returns a template for how the readme should be structured filling in the custom data from the inquirer prompts.
  return `# ${renderLicenseBadge(data.license)} ${data.title}\n 
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
[github  link](https://github.com/${data.username})\n

My Email: ( ${data.email})\n

You can email me with inquiries and report bugs, please allow 1 weeks time before replies.
          
## License
This project is licensed under: ${data.license}

More information can be read here: ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
