// Task 1 : Creates an Array of numbers from 1 to 5 and log the array to the console
let arr=[1,2,3,4,5];
console.log(arr);

// Task 2 : Access the first and last elements of the array and log them to the console
console.log(arr[0])
console.log(arr[4]);



// Task 3: Use the push method to add a new number to the end of the array and log the updated array
const addElement=arr.push(8)
arr.push(9)
console.log(arr);
// Task 4: Use the pop method to remove the last element form the array and log the updated array.
// before pop method use exitsing arr 
console.log(arr)
const removeLastElement=arr.pop();
// After using the method pop 
console.log(arr);


// Task 5: Use the shift method to remove the first element from the array and log the updated array
//original array
console.log(arr);
arr.shift();
console.log(arr);


// Task 6: Use the unshift method to add a new number to the begining of the array and log the updated array
let addElementFirst=arr.unshift(20);
console.log(arr)