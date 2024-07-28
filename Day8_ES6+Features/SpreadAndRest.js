// Task 5 Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console;


const arr=[1,2,3,4,5];
const additionalElements=[6,7,8];
const newArr=[...arr,...additionalElements];
console.log(newArr);

// Task 6 :Use the rest operator in a function to accept an arbitrary number of arguments,sum of them,and return the result
function sumOne(...args){
let sum=0;
for(let arr of args){
    sum +=arr;
}
return sum ;
}
console.log(sumOne(1,2,3,4))