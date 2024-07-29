// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
let img=document.querySelector('img');
img.setAttribute('height','100px');
img.setAttribute('id','dummy-img')
console.log(img)


// Task 8: Add and remove CSS class to/from an HTML element
function addClass(){

    let div=document.getElementById('myElement').classList.add('highlight');
}
function removeClass(){
    let div= document.getElementById('myElement').classList.remove('highlight');
}
