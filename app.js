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

    
