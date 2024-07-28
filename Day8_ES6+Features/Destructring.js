// Task 3: Use array destructing to extract the first and second elements  from array of numbers and log them to the console
let nums=[10,20,30,40,50,60];
const [first,second]=nums
console.log(first)
console.log(second)


// task 4: Use object the destructuring to extract the title and author from a book object and log them to the console.
const book={
    title:'In Search of lost time',
    author:'Marcel Proust',
    year:1993
}
const {title:t,author:a}=book
console.log(`title of the book is : ${t} ,and author of that book :  ${a}`);