const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name, id, email);
        this.github = github;
      }

getGithub(emp) {
     return this.github;
}

getRole(emp) {
    return "Engineer";
}
}
  
module.exports = Engineer;