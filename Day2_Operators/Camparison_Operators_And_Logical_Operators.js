// Activity 3 : Comparison Operators
// Task 8 : Write a program to compare two numbers using > and < and log the result to the console.

let elder=20;
let older=10;
if(older>elder){
    console.log('yes you are older')
}else{
    console.log('no you are elder')
}


let age =15;
if(age<18){
    console.log('you are not apply to the driving license')
}
else{
    console.log('you are apply to driving license')
}





// Task 9 : Write a program to compare two numbers using >= and <= log the result to the console

let num1=30;
let num2=20;
console.log(num1>=num2);

console.log(num1<=num2);

// Task 10 :  Write a program to compare two numbers using == and === log the result to the console
let number=10;
let strNum='10';
console.log(number==strNum)//it gives true because it check equality not data type
console.log(number===strNum)//here also check data type


// Task 11 :  Write a program that uses the && operator to combine two conditions and log the result to the console

let a=1;
let b=0;
let c=-1;
console.log(a>b &&b>c);


// Task 12 : Write a program that uses the || operator to combine two conditions and log the result to the console
console.log(a>b || b<c);

//Task 13 : Write a program that uses the ! operator to combine two conditions and log the result to the console
let isCitizenShip='true';
console.log(!isCitizenShip)