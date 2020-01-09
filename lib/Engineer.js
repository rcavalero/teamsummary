const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name, id, email,"Engineer");
        this.github = github;
      }

getGithub(emp) {
     return this.github;
}

getRole(emp) {
    return this.title;
}
}
  
module.exports = Engineer;