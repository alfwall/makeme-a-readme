# MakeMe ReadMe

## Description
Command line program that requests the contents for a README that is generated after.

## The Result
[Click here!](DEPLOYED_URL_HERE)

![Screenshot of the deployed project.](SCREENSHOT_OF_PROJECT_IN_ASSETS)

## Credits
- [Description of whose code you've taken](URL_TO_THEIR_WEBSITE_AND_OR_CODE)


## TODO
- [x] Create README for this project
- [x] Install Inquirer with `npm i inquirer@8.2.4`
- [ ] Prompt for each necessary thing: 
    - [ ] Project Title
    - [ ] Description
    - [ ] Installation Instructions
    - [ ] Usage Information
    - [ ] License
        - [ ] Provide a LIST OF OPTIONS (request number entry of options?)
        - [ ] "a badge for that license is added near the top of the README" (see: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
    - [ ] Contribution Guidelines
    - [ ] Test Instructions
    - [ ] FAQ (Questions)
        - [ ] Request GitHub username
        - [ ] Link to Github Profile
        - [ ] Request email
        - [ ] "instructions on how to reach me with additional questions"
    - [ ] Table of Contents
        - [ ] Has links to each section
- [ ] Record video demo

## User Story
AS A developer,
I WANT a README generator
SO THAT I can quickly create a professional README for a new project.

## Acceptance Criteria
GIVEN a command-line application that accepts user input...

WHEN I am prompted for information about my application repository,
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

WHEN I enter my project title,
THEN this is displayed as the title of the README.

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions,
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

WHEN I choose a license for my application from a list of options,
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

WHEN I enter my GitHub username,
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile.

WHEN I enter my email address,
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.

WHEN I click on the links in the Table of Contents,
THEN I am taken to the corresponding section of the README.