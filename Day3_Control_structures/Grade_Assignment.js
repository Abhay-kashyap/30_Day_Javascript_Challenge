// Task 5 write a program that uses a switch case to assign a grade ('A','B','C','D','F')based on a score and log the grade to the console

let grade = 98;
if(typeof grade==='number'){


switch(true) {
  case  grade >=90:
    console.log("your grade is A");
    break;
  case grade>=80:
    console.log("your grade is B");
    break;
  case grade>=70:
    console.log("your grade is C");
    break;
  case grade>=60:
    console.log("your grade is D");
    break;
  default:
    console.log("your grade is F");
    break;
}
}
else{
    console.log(`grade is not number`)
}


// Task 6 Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
let num=81;
const checkingOddOrEven= num%2==0?  `number is even`: `number is odd`
console.log(checkingOddOrEven);



// handle null values is best example of ternary operator
const greetings=(person)=>{
    const name =person?person.name:"strange";
    return `Howdy ${name}`
}
console.log(greetings())


const age =21;
const beverage=age>=21?"Proper diet follow":"juice";
console.log(beverage)