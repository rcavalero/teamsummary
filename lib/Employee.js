class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName(emp) {
     return this.name;
}

getEmail(emp) {
    return this.email;
}

getId(emp) {
    return this.id;
}

getRole(emp) {
    return "Employee";
}
}
  
module.exports = Employee;
  