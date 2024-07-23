// Task 7: write aprogram to print a pattern using a nested for loop
let str='';
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str +='*';
    }
    str+='\n';
}
console.log(str)