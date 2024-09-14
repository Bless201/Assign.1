class Book {
    #isbn
    constructor (title, author, isbn, available) {
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this.available = available;
    }

    borrowBook() {
        if (this.available) {
            this.available = false;
        return this.available
        }
    }
    returnBook() {
        if (this.available = true) 
        return this.available 
    }
}

class Library {
    constructor() {
        this.books = [book]
        // console.log(this.books)
    };

    addBOOK(book) { 
        book ={
            title: 'Courage',
            author: 'David Ibiyeomie',
            isbn: '978-978-54925-6-9',
            available: true
        }
        this.books.push(book);
        // console.log(this.books)
    }

    removeBook(isbn) {
          this.books = this.books.filter((book) => book.isbn !== isbn)
        //   console.log(this.books)
    }

    findBookByTitle(title) {
        title = 'Attitude is Everything',
        this.books = this.books.find((book) => book.title === title)
        return title
    }
} 

class DigitalLibrary extends Library {
    constructor(title, author, isbn, available, pdf){
        super(title, author, isbn, available);
        this.pdf = pdf;
    }
    downloadBook(isbn) {
        if (this.isbn =true) {
            return isbn 
        }  
    }
}
const book = new Book('Attitude is Everything', 'Keith Harrel', '978-0-06-077972-6', true);
// console.log(book.borrowBook())
// console.log(book.returnBook());
const library = new Library('Courage','David Ibiyeomie', '978-978-54925-6-9', true)
// library.addBOOK()
// console.log(library);
// library.removeBook()
// console.log(library);
// library.findBookByTitle();
// console.log(library)
const dlibrary =new DigitalLibrary('A Midsummer Night Dream', 'William Shakespeare', '978559484-X', false, true);
dlibrary.downloadBook();
console.log(dlibrary)