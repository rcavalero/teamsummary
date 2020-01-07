const Employee = require("./employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name, id, email);
        this.school = school;
      }

getSchool(emp) {
     return this.school;
}

getRole(emp) {
    return "Intern";
}
}
  
module.exports = Intern;