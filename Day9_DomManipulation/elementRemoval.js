// Task 5: Select an HTML element and remove it from the dom
let h1=document.querySelector('h1')
document.body.removeChild(h1);

// Task 6: Remove the last child of a specfic HTML element
let h2=document.querySelector('h2');
console.log(h2.lastChild)
h2.removeChild(h2.lastChild)