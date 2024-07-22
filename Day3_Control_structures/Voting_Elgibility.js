// Task 2 : Write a program to check if a person is eligible to vote (age>=18) and log the result to the console.
let age =24;
if(age>=18){
    console.log("You are Elgiible to vote")
}else{
    console.log("you are under age focus to your studies")
}

// Task 3 : Write a program to find the largest of three numbers using nested if-else statements.
let num1=20;
let num2=2;
let num3=2;


// if(num1>num2 && num2>num3){
//     console.log('num1 is largest number')
// }else if(num2>num1 &&num2>num3){
//     console.log(`the largest number is ${num2}`)
// }else{
//     console.log( `the largest number is ${num3}`)
// }
// if(num1>num2 && num2 > num3){
//         console.log(`num1 is the largest number ${num1}`)
    
// }else{
//     if(num2>num1 &&num2 >num3){

//         console.log(`num2 is greater than ${num2}`)
//     }
//     else{
//         console.log('num3 is greater than')
//     }
// }
if(num1>num2){
    if(num1>num3){
        console.log(`num1 is the largest number ${num1}`);
    }
    else{
        console.log(`num3 is the largest number ${num3}`);
    }
}else{
    if(num2>num3){
        console.log(`num2 is the largest number ${num2}`);
    }else{
        console.log(`num3 is the largest number ${num3}`)
    }
}