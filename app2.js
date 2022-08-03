'use strict';
//Global variables
var counter=1000;

// const EmployeeID=[];
// for (counter;counter<1007;counter++){
    
//     EmployeeID.push(counter);

// }

const allEmployees=[];
function Employee (FullName,Department,Level,ImageURL){
    this.EmployeeID=0;
    this.FullName=FullName;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
    this.Salary= 0;

     this.uniqNum=function(){
       
    this.EmployeeID=counter;
    counter++;
    },
    this.CalcSalary = function (){
        if (this.Level=="Senior"){
        const Esalary = Math.floor(Math.random() *(2000-1500+1) ) + 1500;
        this.Salary=Esalary-Esalary*0.075;
        }
        else if (this.Level=="Mid-Senior") {
            const Esalary = Math.floor(Math.random() *(1500-1000+1) ) + 1000;
            this.Salary=Esalary-Esalary*0.075;
        } else if(this.Level=="Junior"){
            const Esalary = Math.floor(Math.random() *(1000-500+1) ) + 500;
            this.Salary=Esalary-Esalary*0.075;
            
        }
        
    }
        
    
    
allEmployees.push(this);
}
Employee.prototype.render=function(){
    //for(let i=0;i<allEmployees.length;i++){

       // console.log(`${"Employee name"} : ${this.FullName}`);
       document.write(`<p>${"Employee name"} : ${this.FullName}</p>`);
       document.write(`<p>${"Department"} : ${this.Department}</p>`);
       document.write(`<p>${"Employee salary"} : ${this.Salary}</p>`);
       
       

       
    }
//} 

let Object1= new Employee("Ghazi samer","Administration","Senior","https://this-person-does-not-exist.com/img/avatar-34fc11a5dbdfe206c14f0953b7d9f0ae.jpg");
let Object2=new Employee("Lana Ali","Finance","Senior","https://this-person-does-not-exist.com/img/avatar-a48ad40feaf09748a1548a6b1f27f8f5.jpg");
let Object3=new Employee("Tamara Ayoub","Marketing","Senior","https://this-person-does-not-exist.com/img/avatar-c26cb8b4fbed5430a367d46a7dcbdf39.jpg");
let Object4=new Employee("Safi Walid","Administration","Mid-Senior","https://this-person-does-not-exist.com/img/avatar-ce486fb24a540a9afe2491f5bf58e214.jpg");
let Object5=new Employee("Omar Zaid","Development","Senior","https://this-person-does-not-exist.com/img/avatar-35c9b355c01c2cd5dccae38ea6c0f5b4.jpg");
let Object6=new Employee("Rana Saleh","Development","Junior","https://this-person-does-not-exist.com/img/avatar-e9f324aaa70769f8ab119f784568a04f.jpg");
let Object7=new Employee("Hadi","Finance","Mid-Senior","https://this-person-does-not-exist.com/img/avatar-e146bd2a130a7352068817fa7be1ea6e.jpg");

function callingFunctons(){
    
    Object1.CalcSalary();
    Object1.uniqNum();

    Object2.CalcSalary();
    Object2.uniqNum();

    Object3.CalcSalary();
    Object3.uniqNum();

    Object4.CalcSalary();
    Object4.uniqNum();

    Object5.CalcSalary();
    Object5.uniqNum();

    Object6.CalcSalary();
    Object6.uniqNum();

    Object7.CalcSalary();
    Object7.uniqNum();
//prototype
    Object1.render();
    Object2.render();
    Object3.render();
    Object4.render();
    Object5.render();
    Object6.render();
    Object7.render();
    
}
callingFunctons();
//console.log(allEmployees);

