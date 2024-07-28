// Task 7 :Write a function that takes two parameter and return their product , with the second parameter having a default value of 1 . log the result of calling this function with and without the second parameter
function productValue(first,second=10){
    let product=first*second;
    return product
}
console.log(productValue(10,20)) //calling with parameter
console.log(productValue(10)) //calling without parameter