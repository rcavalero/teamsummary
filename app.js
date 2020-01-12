// Instructions
// You will build a software engineering team generator command line application. The application will prompt the user for information about the
//  team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and 
// interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file 
// that displays a nicely formatted team roster based on the information provided by the user. 

// How do you deliver this? Here are some guidelines:
    // Use the Inquirer npm package to prompt the user for their email, id, and specific information based on their role with the company. For instance,
    //  an intern may provide their school, whereas an engineer may provide their GitHub username.
    // Your app will run as a Node CLI to gather information about each employee.

// You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.
// The different employee types should all inherit some methods and properties from a base class of Employee.
// In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

// *** Minimum Requirements ***
    // Functional application.
    // GitHub repository with a unique name and a README describing the project.
    // User can use the CLI to generate an HTML page that displays information about their team.
    // All tests must pass.

// User input
    // The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

// Roster output
    // The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should
    //  display the following in no particular order:
        // Name
        // Role
        // ID
        // Role-specific property (School, link to GitHub profile, or office number)

    // *** Bonus ***
        // Use validation to ensure that the information provided is in the proper expected format.
        // Add the application to your portfolio.


    // *** Submission on BCS ***
    // You are required to submit the following:
        // The URL of the GitHub repository
        // Optional: GIF of your CLI applications functionality

// *** To Do List ***
    // Add welcome and information prompt
    // readme file
    // should email be a field in the class?

    // bonus items
        // Use validation to ensure that the information provided is in the proper expected format.
        // Add the application to your portfolio.
        // Optional: GIF of your CLI applications functionality

// Coding starts here
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateTeamHTML = require("./lib/generateTeamHTML");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


// need function to write HTML file

// this will contain the html cards for each employee
const teamHTML = [];
let mgrName = "";

let empId = 1;

const welcome = [
    { type: "input", message: "Team Summary - Enter Manager's Info then add Team Members. (press any key to continue)", name: "proceed"},  
];
const empQuestions = [
    { type: "input", message: "Enter Name", name: "name"},
    { type: "input", message: "Enter email address", name: "email" },
];
const mgrQuestion = [
    { type: "input", message: "Enter office number", name: "officeNumber" },  // manager
];
const engQuestion = [
    { type: "input", message: "Enter Engineer's GitHub username", name: "username" }, // engineers
];
const intQuestion = [
    { type: "input", message: "Where did Intern go to school?", name: "school" }, // interns
];
const addEmpQuestion = [
    { type: "list",  message: "Do you want to add a team member?",choices: ["Engineer", "Intern","No"], name: "role"}
];

async function getMgrData () {
    try {
        let start = await inquirer.prompt(welcome);
        let empData = await inquirer.prompt(empQuestions);
        let mgrData = await inquirer.prompt(mgrQuestion);
        const manager = new Manager(empData.name,empId,empData.email,mgrData.officeNumber);
        empId ++;
        mgrName = manager.name;
        teamHTML.push(manager.getHTML(manager));
        addTeamMember();
    } catch (err) {
        console.log(err);
    };
}

async function addTeamMember () {
    try {
        let addEmployee = await inquirer.prompt(addEmpQuestion);
            let role = addEmployee.role
            if (role === "No") {
                generateHTMLFile();
            } else { getEmpData(role)};
    } catch (err) {
        console.log(err);
    };
}

async function getEmpData (role) {
    try {
        let empData = await inquirer.prompt(empQuestions);
        if (role === "Engineer") {
            let engData = await inquirer.prompt(engQuestion);
            const engineer = new Engineer(empData.name,empId,empData.email,engData.username);
            teamHTML.push(engineer.getHTML(engineer));
        } else {
        let intData = await inquirer.prompt(intQuestion);
        const intern = new Intern(empData.name,empId,empData.email,intData.school);
        teamHTML.push(intern.getHTML(intern));
        };
        empId ++;
        addTeamMember();
    } catch (err) {
        console.log(err);
    };
}

function generateHTMLFile(){
            const html = generateTeamHTML.generateTeamHTML(teamHTML,mgrName);
            writeFileAsync("./output/team.html", html);
    console.log("File team.html was generated and placed in the output folder")
}
getMgrData();

    
