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

getHTML(data){
    return `<div class="card shadow rounded-lg m-3" style="width: 275px!important;">
    <div class="card-body bg-success text-white">
      <h4 class="card-title">${this.name}</h4>
      <h4 class="card-title"></span><span class="fas fa-university"></span> ${this.title}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Id: ${this.id}</li>
            <li class="list-group-item">Email:  <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>
</div>`
}
}
  
module.exports = Intern;