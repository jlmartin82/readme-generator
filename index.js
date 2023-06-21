const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); 


async function generateReadme() {
  // Prompt user for input
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
console.log(answers)
  const { projectTitle, description, installation, usage, contributing, tests, license, githubUsername, email } = answers;



  // Generate the README content
  const readmeContent = `# ${projectTitle}\n\n`
    + '## Description\n\n'
    + `${description}\n\n`
    + '## Table of Contents\n\n'
    + '- [Installation](#installation)\n'
    + '- [Usage](#usage)\n'
    + '- [License](#license)\n'
    + '- [Contributing](#contributing)\n'
    + '- [Tests](#tests)\n'
    + '- [Questions](#questions)\n\n'
    + '## Installation\n\n'
    + `${installation}\n\n`
    + '## Usage\n\n'
    + `${usage}\n\n`
    + '## License\n\n'
    + `This application is covered under the ${license} license. ![License: ${license}](${license})\n\n`
    + '## Contributing\n\n'
    + `${contributing}\n\n`
    + '## Tests\n\n'
    + `${tests}\n\n`
    + '## Questions\n\n'
    + `If you have any questions, feel free to reach out to me via GitHub: [@${githubUsername}](https://github.com/${githubUsername})\n`
    + `Or you can email me at: ${email}\n`;

  // Save the README.md file
  fs.writeFile('README.md', readmeContent, err => {
    if (err) {
      console.error('An error occurred while saving the README.md file:', err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
}

// Call the function to generate the README
generateReadme();
