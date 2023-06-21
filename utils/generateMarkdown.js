// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License\n\nThis application is covered under the ${license} license. [![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})\n\n`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${renderLicenseBadge(data.license)}\n\n${data.description}\n\n## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n${renderLicenseLink(data.license) ? '- [License](#license)\n' : ''}- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n${renderLicenseSection(data.license)}## Contributing\n\n${data.contributing}\n\n## Tests\n\n${data.tests}\n\n## Questions\n\nIf you have any questions, feel free to reach out to me via GitHub: [@${data.githubUsername}](https://github.com/${data.githubUsername})\n\nOr you can email me at: ${data.email}\n`;
}

module.exports = generateMarkdown;
