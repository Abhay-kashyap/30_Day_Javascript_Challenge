// Task6 : write a program to calculate the factorial of a number using a do...while loops.
let i=1;
let fact =1;
let number=7;
function findFact(number){

    if(number<0){
        console.log('number is negative not find factorial');
    }else{
        do{
            fact =fact*i;
            i++
        }while(i<=number);
    }
    return fact       
}
console.log(findFact(number));