// Task 8 :Use enhanced object literals to create an object with method and properties , and log the object to the console
const firstName='Rahul';
const lastName='Singh';
const age=20;
const user={
    firstName,
    lastName,
    age,
    city:'Lucknow',
    fullName(){
        return `Name of the user ${user.firstName} ${user.lastName} and  age is : ${user.age}`
    }
} 
console.log(user)
console.log(user.fullName());


// Task 9: Create an object with computed property names based on variables and log the object to the console.
let propertyname1='name'
let propertyname2='age'
let propertyname3='city'
const person={
    [propertyname1]:'Rahul',
    [propertyname2]:20,
    [propertyname3]:'kanpur'
}
console.log(person)