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

getHTML(data){
    return `<div class="card shadow rounded-lg m-3" style="width: 275px!important;">
    <div class="card-body bg-primary text-white">
      <h4 class="card-title">${this.name}</h4>
      <h4 class="card-title"><span class="fas fa-drafting-compass"></span> ${this.title}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Id: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
        </ul>
    </div>
</div>`
}
}
  
module.exports = Engineer;