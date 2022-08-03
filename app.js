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
"Image URL" : "https://this-person-does-not-exist.com/img/avatar-34fc11a5dbdfe206c14f0953b7d9f0ae.jpg",
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
    "Image URL" : "https://this-person-does-not-exist.com/img/avatar-a48ad40feaf09748a1548a6b1f27f8f5.jpg",
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
    "Image URL" : "https://this-person-does-not-exist.com/img/avatar-c26cb8b4fbed5430a367d46a7dcbdf39.jpg",
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
    "Image URL" : "ce486fb24a540a9afe2491f5bf58e214",
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
    "Image URL" : "35c9b355c01c2cd5dccae38ea6c0f5b4",
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
    "Image URL" : "e9f324aaa70769f8ab119f784568a04f",
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
    "Image URL" : "https://this-person-does-not-exist.com/img/avatar-e146bd2a130a7352068817fa7be1ea6e.jpg",
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
