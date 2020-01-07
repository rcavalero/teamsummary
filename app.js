// Instructions
// You will build a software engineering team generator command line application. The application will prompt the user for information about the
//  team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and 
// interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file 
// that displays a nicely formatted team roster based on the information provided by the user. 

// How do you deliver this? Here are some guidelines:
    // Use the Inquirer npm package to prompt the user for their email, id, and specific information based on their role with the company. For instance,
    //  an intern may provide their school, whereas an engineer may provide their GitHub username.
    // Your app will run as a Node CLI to gather information about each employee.


// In the Develop folder, there is a package.json, so make sure to npm install.

// The dependencies are, jest for running the provided tests, and inquirer for collecting input from the user.

// There are also unit tests to help you build the classes necessary.

// It is recommended that you follow this workflow:

// Run tests
// Create or update classes to pass a single test case
// Repeat
// 🎗 Remember, you can run the tests at any time with npm run test

// *** Hints ***
// Create multiple HTML templates for each type of user. For example, you could use the following templates:
    // main.html
    // engineer.html
    // intern.html
    // manager.html

// You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.
// The different employee types should all inherit some methods and properties from a base class of Employee.
// In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

// *** Minimum Requirements ***
    // Functional application.
    // GitHub repository with a unique name and a README describing the project.
    // User can use the CLI to generate an HTML page that displays information about their team.
    // All tests must pass.

// Classes
    // The project must have the these classes: Employee, Manager, Engineer, Intern. The tests for these classes in the tests directory must all pass.
    // The first class is an Employee parent class with the following properties and methods:
        // name
        // id
        // title
        // getName()
        // getId()
        // getEmail()
        // getRole() // Returns 'Employee'
        // The other three classes will extend Employee.

    // In addition to Employee's properties and methods, Manager will also have:
        // officeNumber
        // getRole() // Overridden to return 'Manager'

    // In addition to Employee's properties and methods, Engineer will also have:
        // github // GitHub username
        // getGithub()
        // getRole() // Overridden to return 'Engineer'

    // In addition to Employee's properties and methods, Intern will also have:
        // school
        // getSchool()
        // getRole() // Overridden to return 'Intern'

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
// npm install







// Coding starts here