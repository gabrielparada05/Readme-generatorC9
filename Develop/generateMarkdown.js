// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'GNU General Public License v2.0') {
    yourLicense = `![License: GNU General Public License v2.0](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`

  } else if (licenseType === 'GNU General Public License v3.0') {
    yourLicense = `![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)`

  } else if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } 
  else if (licenseType === 'Mozilla Public License 2.0') {
    yourLicense = `![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  } 
  else if (licenseType === 'The Artistic License 2.0') {
    yourLicense = `![License: The Artistic License 2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)`
  } 
  else if (licenseType === 'IBM Public License Version 1.0') {
    yourLicense = `![License: IBM Public License Version 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  }
  else if (licenseType === 'Unlicense') {
    yourLicense = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  } 
  else {
    license.license = "N/A"
  }
  return yourLicense;
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'GNU General Public License v2.0') {
    yourLicense = `![License: GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`

  } else if (licenseType === 'GNU General Public License v3.0') {
    yourLicense = `![License: GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)`
    
  } else if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://opensource.org/licenses/MIT)`
  } 
  else if (licenseType === 'Mozilla Public License 2.0') {
    yourLicense = `![License: Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
  } 
  else if (licenseType === 'The Artistic License 2.0') {
    yourLicense = `![License: The Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)`
  } 
  else if (licenseType === 'IBM Public License Version 1.0') {
    yourLicense = `![License: IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)`
  }
  else if (licenseType === 'Unlicense') {
    yourLicense = `![License: Unlicense](http://unlicense.org/)`
  } 
  else {
    license.license = "N/A"
  }
  return yourLicense;
};
// code from https://gist.githubusercontent.com/scalahub/23fb5e590d36c51a07edd7193c4513ff/raw/e0ab9ca77b1711d806099bc00d10ec4086356ac5/license-badges.md

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
renderLicenseBadge(license)
renderLicenseLink(license)

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
