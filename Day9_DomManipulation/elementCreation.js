// task 3: Create a new div elements with some text content and append it to the body
let createElementDiv=document.createElement('div');
createElementDiv.innerText='this is a div';
// let body=document.getElementsByTagName('body');

document.body.appendChild(createElementDiv);

// Task 4 : Create a new li element and add it to an existing ul list
let createList=document.createElement('li');
createList.innerText='burger'
let cafe=document.querySelector('#cafe');
cafe.append(createList)