// Task 5: create a nested object representing a library with properties like name and books (an array of book objects),and log the library object to the console.


const library={
       name:'city library',
       books:
        [
            {
                title:'in search of lost time',
                author:'marcel proust',
                year:1993,
            },
             {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            year: 1813
        },
        {
            title: 'Wuthering Heights',
            author: 'Emily Brontë',
            year: 1847
        },
        {
            title: 'Don Quixote',
            author: 'Miguel de Cervantes',
            year: 1605
        },
        {
            title: 'Jane Eyre',
            author: 'Charlotte Brontë',
            year: 1847
        },
           
        ]
       
    }

console.log(library.books);
// Taak 6: Access and log the name of the library and the titles of all the books in the library

console.log(library.name)
// for(let i=0;i<library.books.length;i++){
//     console.log(library.books[i].title)
// }
// library.books.map(book=>{console.log(book.title)
// });

// Task 7: Add a method to the book object that uses the this keyword to return a string with the books title and year,and log the result of calling this method
// library.returnString=function(){
//    this.books.map(book=>{
//     console.log(`Book Title : ${book.title} and year ${book.year}`)
//    })
   
// }
// console.log(library.returnString());


const book={
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    year: 1993,
    returnStr:function(){
        return `Book Title : ${this.title} Year: ${this.year}`
    }
}
console.log(book.returnStr());