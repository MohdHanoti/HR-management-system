'use strict';
const body =document.getElementsByTagName('body');
//Global variables
var counter=1000;


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
    

        this.CalcSalary();
        this.uniqNum();
        const divEl = document.createElement('div');
        //document.getElementById("MyElement").classList.add('MyClass');
        body[0].appendChild(divEl);

        const imgEl = document.createElement('img');
    imgEl.src = this.ImageURL;
    imgEl.alt = this.name;
    divEl.appendChild(imgEl);

        const pEl=document.createElement('p');
        pEl.textContent= `Employee name : ${this.FullName}   ID : ${this.EmployeeID}`;
        divEl.appendChild(pEl);

        const pEl2=document.createElement('p');
        pEl2.textContent= `Department : ${this.Department}`;
        divEl.appendChild(pEl2);

        const pEl3=document.createElement('p');
        pEl3.textContent= `Employee salary : ${this.Salary}`;
        divEl.appendChild(pEl3);

        
        


    //    document.write(`<p>${"Employee name"} : ${this.FullName}</p>`);
    //    document.write(`<p>${"Department"} : ${this.Department}</p>`);
    //    document.write(`<p>${"Employee salary"} : ${this.Salary}</p>`);
       
       

       
    }
 

let Object1= new Employee("Ghazi samer","Administration","Senior","./assets/Ghazi samer.png");
let Object2=new Employee("Lana Ali","Finance","Senior","./assets/lanaAli.jpg");
let Object3=new Employee("Tamara Ayoub","Marketing","Senior","./assets/Tamara.jpg");
let Object4=new Employee("Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg");
let Object5=new Employee("Omar Zaid","Development","Senior","./assets/omar.jpg");
let Object6=new Employee("Rana Saleh","Development","Junior","./assets/Rana.jpg");
let Object7=new Employee("Hadi","Finance","Mid-Senior","./assets/Hadi.jpg");

function callingFunctons(){
    
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


