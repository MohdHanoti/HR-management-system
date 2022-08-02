//Global variables
var counter=1000;
const EmployeeID=[];
for (counter;counter<1007;counter++){
    
    EmployeeID.push(counter);

}
//Objects
//Object 1
const employee1 = {
"Employee ID":"" ,
"Full Name": "Ghazi samer",
Department : "Administration",
Level : "Senior",
"Image URL" : "",
Salary : "",
uniqNum : function(){
    
this["Employee ID"]=EmployeeID[0];
},
CalcSalary : function(){
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
}
//Object 2
const employee2 = {
    "Employee ID":"" ,
    "Full Name": "Lana Ali",
    Department : "Finance",
    Level : "Senior",
    "Image URL" : "",
    Salary : "",
    uniqNum : function(){
        
    this["Employee ID"]=EmployeeID[1];
    },
    CalcSalary : function(){
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
    }
    //Object 3
const employee3 = {
    "Employee ID":"" ,
    "Full Name": "Tamara Ayoub",
    Department : "Marketing",
    Level : "Senior",
    "Image URL" : "",
    Salary : "",
    uniqNum : function(){
        
    this["Employee ID"]=EmployeeID[2];
    },
    CalcSalary : function(){
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
    }
    //Object 4
const employee4 = {
    "Employee ID":"" ,
    "Full Name": "Safi Walid",
    Department : "Administration",
    Level : "Mid-Senior",
    "Image URL" : "",
    Salary : "",
    uniqNum : function(){
        
    this["Employee ID"]=EmployeeID[3];
    },
    CalcSalary : function(){
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
    }
    //Object 5
const employee5 = {
    "Employee ID":"" ,
    "Full Name": "Omar Zaid",
    Department : "Development",
    Level : "Senior",
    "Image URL" : "",
    Salary : "",
    uniqNum : function(){
        
    this["Employee ID"]=EmployeeID[4];
    },
    CalcSalary : function(){
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
    }
     //Object 6
const employee6 = {
    "Employee ID":"" ,
    "Full Name": "Rana Saleh",
    Department : "Development",
    Level : "Junior",
    "Image URL" : "",
    Salary : "",
    uniqNum : function(){
        
    this["Employee ID"]=EmployeeID[5];
    },
    CalcSalary : function(){
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
    }
     //Object 7
const employee7 = {
    "Employee ID":"" ,
    "Full Name": "Hadi",
    Department : "Finance",
    Level : "Mid-Senior",
    "Image URL" : "",
    Salary : "",
    uniqNum : function(){
        
    this["Employee ID"]=EmployeeID[6];
    },
    CalcSalary : function(){
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
    }
    function print(){
    while (true){

        console.log("Employee name: ",employee1["Full Name"]);
        console.log("Employee salary: ",employee1.Salary);
        
        console.log("Employee name: ",employee2["Full Name"]);
        console.log("Employee salary: ",employee2.Salary);  

        console.log("Employee name: ",employee3["Full Name"]);
        console.log("Employee salary: ",employee3.Salary);  

        console.log("Employee name: ",employee4["Full Name"]);
        console.log("Employee salary: ",employee4.Salary);  

        console.log("Employee name: ",employee5["Full Name"]);
        console.log("Employee salary: ",employee5.Salary);  

        console.log("Employee name: ",employee6["Full Name"]);
        console.log("Employee salary: ",employee6.Salary);  

        console.log("Employee name: ",employee7["Full Name"]);
        console.log("Employee salary: ",employee7.Salary);  
        break;
    }
    }
    

function callFunction(){
    employee1.CalcSalary(); 
    employee2.CalcSalary();
    employee3.CalcSalary(); 
    employee4.CalcSalary(); 
    employee5.CalcSalary(); 
    employee6.CalcSalary(); 
    employee7.CalcSalary();
    
    employee1.uniqNum();
    employee2.uniqNum();
    employee3.uniqNum();
    employee4.uniqNum();
    employee5.uniqNum();
    employee6.uniqNum();
    employee7.uniqNum();

    print();

}
callFunction();
