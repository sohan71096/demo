interface Employee{
firstName:string;
lastName:string
age:string;
salary:string;
question:boolean;
//n:null;
}

let emp:Employee={
firstName:"Rahul",
lastName:"Birla",
age:"32.5",
salary:"3200",
question:1,
//n:""
}
console.log("Full Name:"+emp.firstName);

//There is an error when u pass 1 or a 0 to a boolean. Also a string type variable can't take number data type.