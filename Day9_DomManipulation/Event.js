// Task 9: Add a click event listener to a button that changes the text content of paragraph
let p=document.getElementById('para');
console.log(p)
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    p.innerText='that paragraph content change by btn click'
})
// Task 10 : Add a mouseover event listener to an element that changes its border color
p.addEventListener('mouseover',()=>{
    p.style.border='2px solid green';
})
p.addEventListener('mouseout',()=>{
    p.style.border='';
})