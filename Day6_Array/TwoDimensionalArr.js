// Task 12: Create a two dimensional Array (matrix) and log the entire array to the console
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);

// Task 13 : Access and log a specific element form two-dimensional Array
console.log(matrix[0][1]);
console.log(matrix[0][2]);
console.log(matrix[1][0]);
console.log(matrix[2][2]);


//another question for self practice
let arr=[
    ["Harry",18, 'Male',"BCom"],
    ['sunny',19,'Male','BCA'],
    ['Sarah',18,'Male',"BCA"],
    ['Ravi',20,'Male',"BA"]
]
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){

        console.log(arr[i][j] )
    }
}