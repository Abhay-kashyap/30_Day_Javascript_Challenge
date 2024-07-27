// Task 1 create an object representing a book with properties like title ,author ,and year and log the object to the console.
const book={
    title:"In search of lost time",
    author:"Marcel Proust",
    year:"1913"
}
console.log(book)

// Access and log the title and author properties of the book object
// console.log(book.title);
// console.log(book['author']);


// Task 3 : add a method to the book object that returns a string with the book's and author and log the result of calling this method
book.returnString=function(){
    return `${this.title} and ${this.author}`;
}
console.log(book.returnString());



// Task 4: Add a method to the book object takes a parameter year and updates the book year property ,then log updated object
book.updateYear=function(year){
this.year=year;
}
book.updateYear(2024)
console.log(book)