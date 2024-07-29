// task 1: Select an HTML element by id and change its text content
let head=document.getElementById('h1');
console.log(head.textContent='task 1 one done');

// Task 2: Select an HTML element by class and change its background color
let h=document.getElementsByClassName('head2');
if(h.length>0){
    h[0].style.backgroundColor='yellow'
}else{
    console.log('head2 is not found ')
}