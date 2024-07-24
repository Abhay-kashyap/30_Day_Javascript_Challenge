// Task 9: Write a higher-order function that takes a function and a number , and calls the function that many times
function repeatFunc(sayHello,number){
    for(let i=1;i<=number;i++){
        sayHello();
    }
}
const sayHello=()=>{
    console.log('hello how are you')
}
repeatFunc(sayHello,5);

// Task 10 :Write a higher - order function that takes two functions and a value ,applies the first function to the value , and then applies the second function to the result 


function high(fun1 ,fun2 ,value){
let res1=fun1(value);
let res2=fun2(res1);
return res2
}
function addOne(value){
return value+1;    
}
function square(value){
return value*value;
}
let value=7;
let result=high(addOne,square,value);
console.log(result)