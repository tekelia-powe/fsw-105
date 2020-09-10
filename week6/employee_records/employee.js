const employee = [];

function myEmployee (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status; 
}

myEmployee.prototype.printEmployeeForm = function (){
    console.log("Name: " +this.name);
    console.log("Job Title: " +this.jobTitle);
    console.log("Salary: $" +this.salary);
    console.log("Status: " +this.status);
    console.log("--------------------------")
}


var employee1 = new myEmployee("Tracy Hill", "Office Assistant", "35,800K")
employee1.printEmployeeForm();

var employee2 = new myEmployee("Andre Terry", "Inspector", "26,800K", "Contract")
employee2.printEmployeeForm();

var employee3 = new myEmployee("Tekelia Powe", "Housing Specialist", "55,100K")
employee3.printEmployeeForm();

employee.push(employee1,employee2, employee3);

