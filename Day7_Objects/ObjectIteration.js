// Task 8: Use a for ... in loop to iterate over the properties of the book object and log each property and its value
const book={
    title:"in search of lost time",
    author:"Marcel Proust",
    year:1993,

}
for (const key in book) {
    if(book.hasOwnProperty(key)){
        console.log(`${key} ${book[key]}`)
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));