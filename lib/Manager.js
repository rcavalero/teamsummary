const Employee = require("./employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name, id,email,"Manager");
        this.officeNumber = officeNumber;
      }

getOfficeNumber(emp) {
     return this.officeNumber;
}

getRole(emp) {
    return this.title;
}
}
  
module.exports = Manager;