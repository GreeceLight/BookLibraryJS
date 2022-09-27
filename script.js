const addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener("click", addBookToLibrary)


let myLibrary = [];

function Book(name, author, pages, read) {
    //Get book name and put it in variable
    //Get book author and put it in variable
    //Get book pages and put it in variable
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(this.name + " " + this.author + " " + this.pages + " " 
        + this.read);
    }
}

function addBookToLibrary() {
    let name = prompt("What is the name of your book?");
    let author = prompt("What is the author of your book?");
    let pages = prompt("What is the pages of your book?");
    let read = confirm("Have you read it?");
    let book = new Book(name, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
}