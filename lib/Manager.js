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
  
getHTML(data){
    return `<div class="card shadow rounded-lg m-3" style="width: 275px!important;">
    <div class="card-body bg-primary text-white">
      <h4 class="card-title">${this.name}</h4>
      <h4 class="card-title"><span class="fas fa-jedi"></span> ${this.title}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Id: ${this.id}</li>
            <li class="list-group-item">Email:  <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
    </div>
</div>`
}

}
  
module.exports = Manager;