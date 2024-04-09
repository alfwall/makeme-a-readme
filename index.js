// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What's your project TITLE?",
        type: "input"
    },
    {
        name: "description",
        message: "What's the project DESCRIPTION?",
        type: "input"
    },
    {
        name: "install",
        message: "What are the INSTALLATION instructions?",
        type: "input"
    },
    {
        name: "usage",
        message: "What are the USAGE instructions?",
        type: "input"
    },
    {
        name: "license",
        message: "Choose a license:",
        type: "list",
        choices: [
            "Apache 2.0",
            "GNU GPL v3",
            "MIT",
            "PDDL"
        ]
    },
    {
        name: "contributing",
        message: "What are the CONTRIBUTION GUIDELINES?",
        type: "input"
    },
    {
        name: "testing",
        message: "What are the TESTING instructions, if any?",
        type: "input"
    },
    {
        name: "githubUser",
        message: "What's your GitHub USERNAME?",
        type: "input"
    },
    {
        name: "email",
        message: "What's your contact EMAIL?",
        type: "input"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(`./${fileName}`, data);
    }
    catch (err) {
        console.error(err);
    }
}

// TODO: Create a function to initialize app
function init() {
    let dataAsObject = "";
    // Go through questions, collect answers
    //console.log("questions: " + JSON.stringify(questions));
    inquirer
        .prompt(questions)
        .then((answer) => {
            // Combine all of the responses
            dataAsObject = {
                title: answer.title,
                license: answer.license,
                description: answer.description,
                install: answer.install,
                usage: answer.usage,
                contributing: answer.contributing,
                testing: answer.testing,
                githubUser: answer.githubUser,
                email: answer.email
            };
            // Create the markdown text
            var data = generateMarkdown(dataAsObject);
            //console.log("data: " + data)
            // Save it to a file
            writeToFile(`./output/${dataAsObject.title}_README.md`, data);
        })
        .catch((error) => {
            console.log(error);
            return;
        });
}

// Function call to initialize app
init();
