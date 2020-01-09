const Employee = require("./employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name, id,email,"Intern");
        this.school = school;
      }

getSchool(emp) {
     return this.school;
}

getRole(emp) {
    return this.title;
}
}
  
module.exports = Intern;