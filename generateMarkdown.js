// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'None'){
    return '';
  }

  if(license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if(license == 'GPLv2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }

  if(license == 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  if(license == 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'None'){
    return '';
  }

  if(license == 'MIT') {
    return `Click [here](https://www.mit.edu/~amini/LICENSE.md) for more info`;
  }

  if(license == 'GPLv2') {
    return `Click [here](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html#SEC4) for more info`;
  }

  if(license == 'Apache') {
    return `Click [here](https://www.apache.org/licenses/LICENSE-2.0) for more info`;
  }

  if(license == 'Unlicense') {
    return `Click [here](https://unlicense.org/) for more info`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None'){
    return '';
  }

  if(license == 'MIT') {
    return `## License
    
  Copyright <YEAR> <COPYRIGHT HOLDER>
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
  THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
  DEALINGS IN THE SOFTWARE.
    `
  }

  if(license == 'GPLv2') {
    return `## License
    
  one line to give the program's name and an idea of what it does.
  Copyright (C) yyyy  name of author
  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
    `
  }

  if(license == 'Apache') {
    return `## License
    
  Copyright [yyyy] [name of copyright owner]
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
    `
  }

  if(license == 'Unlicense') {
    return `## License
    
  This is free and unencumbered software released into the public domain.
  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.
  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.
  For more information, please refer to <http://unlicense.org/>
    `
  }
}

function renderQuestionSection(confirmQuestion, gitHubUsername, email) {
  if(!confirmQuestion) {
    return ``;
  }

  if(confirmQuestion) {
    return `## Questions
    
  If you have any questions about this project you can message me at these links:<br>
  https://github.com/${gitHubUsername}<br>
  My email address: ${email}
    `
  }

}

function createTableofContents(data){

  licenseContent = '';
  if(data.license !== 'None'){
    licenseContent = `[License Info](#License)`;
  }

  questionContent = '';
  if(data.confirmQuestion) {
    questionContent = `[Questions](#Questions)`;
  }

  return `## Table of Contents
  [Description](#Description)
  [Installation Instructions](#Installation-Instructions)
  [Usage Rights](#Usage-Rights)
  [Contribution Guidelines](#Contribution-Guidelines)
  [Testing Instructions](#Testing-Instructions)
  ${licenseContent}
  ${questionContent}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // destructure data 
  const { title, description, install, usage, contrib, testing, license, gitHubUsername, email, confirmQuestion} = data;
  createTableofContents(data);

  return `# ${title}
  ${renderLicenseBadge(license)}
  ${createTableofContents(data)}
  ## Description
  
  ${description}
  ## Installation Instructions
  
  ${install}
  ## Usage Rights
  
  ${usage}
  ## Contribution Guidelines
  
  ${contrib}
  ## Testing Instructions
  
  ${testing}
  ${renderQuestionSection(confirmQuestion, gitHubUsername, email)}
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  `;
}

module.exports = generateMarkdown;
