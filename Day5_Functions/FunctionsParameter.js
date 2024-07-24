// Task 7: Write a function that takes two parameter and returns their products .Provide default value for the second parameter
const defaultParameter=function(product1,product2=2){
    return `${product1 * product2} `
}
console.log(defaultParameter(5,8));


// Task 8:Write a function that takes a persons names and age and returns a greeting message .Provide a default value for the age;



const greeting =(name,age=18)=>{
    console.log(`hello ${name},how are you ?`)
}
greeting('abhay');

