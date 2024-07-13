// Activity 1: Variable Declaration
//Task 1: Declare a variable using var , assign it a number , and log the value to the console.
var num=20;
console.log(num)


// Task 2: Decalre a variable using let ,assign it a string , and log the value to the console 
let str="hello how are you ";
console.log(str)

// Activity 2 : constat Declaration
// Task 3: Declare a variable using const , assign it a boolean value,and log the value to the console.
const bool=true;
console.log(bool);

// Activity 3:Data Types
// Task4:Create variables of different data types (number ,string ,boolean ,object ,array) and log each variables tyoe using the typeof operator

let year=2024;
console.log(year);
console.log(typeof year);

//  create variable store with string
let myStr="hello today day 1 of js challenge";
console.log(myStr);
console.log(typeof myStr);


// create variable and store in boolean values

let y=new Boolean(false)
console.log(typeof y)//it return objects  || do not create Boolean objects.The new keyword complicates the code and slows down execution speed.Boolean objects can produce unexpected results:
let isCitizenShip=true;
console.log(isCitizenShip)
console.log(typeof isCitizenShip)

// create object and check type
const person ={name:"john",age:35,salary:`25k`};

console.log(typeof person);

let marks=[10,20,30,40];
let sum=0;
let marksTotal=marks.map((e)=>{
    return sum +=e;
});
console.log(sum);
console.log(typeof marks)//objects

// Activity 4:Reassigning Variables
// Task 5:Decalare a variable using let ,assign it an inital value ,reassign a new value, and log both to the console;
let value=20;
console.log(value)
value=30;
console.log(value)


// Activity 5: understaing const 
// Task :6 try reassingning a variable declared with const and observe the error
const name="john";
// name='alice';
console.log(name)