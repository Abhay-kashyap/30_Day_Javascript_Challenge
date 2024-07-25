// Task 7: Use the map method to create a new array where each number is doubled and log the new array
let arr=[1,2,3,4,5,6,7];
const doubledArr=arr.map((curEle)=>{
    return curEle *2
})
console.log(doubledArr);


// Task 8: Use the filter method to create a new array with only even numbers and log the new array

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12];
let filterEvenNum=numbers.filter((curEle)=> curEle%2==0);
console.log(filterEvenNum);


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result
const sumOfAllNum=numbers.reduce((perv,curr)=>perv+curr);
console.log(sumOfAllNum);