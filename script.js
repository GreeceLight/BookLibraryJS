const addBookButton = document.querySelector(".add-book");
const bookSection = document.querySelector(".book-section");

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
    showBooks();
}

function showBooks(){
    //Loop through myLibrary array
    //for every entry a new Book element must be shown on screen
    //Have the name, author, pages and if read
    //Optimize to only show the newly added book at the end instead of...
    //...having them all reload

    myLibrary.forEach(book => {
        const newBook = document.createElement("div");
        newBook.className = "book"
        bookSection.appendChild(newBook);

        const cover = document.createElement("div");
        cover.className = "book-cover"
        newBook.appendChild(cover)

        const interact = document.createElement("div");
        interact.className = "book-interact"
        newBook.appendChild(interact)
        
        const title = document.createElement("h1")
        const author = document.createElement("h3")
        const pages = document.createElement("h4")
        const hasRead = document.createElement("h5")
        title.textContent = book.name
        cover.appendChild(title)
        author.textContent = book.author
        cover.appendChild(author)
        pages.textContent = book.pages
        cover.appendChild(pages)
        hasRead.textContent = book.read
        cover.appendChild(hasRead)

        const readButton = document.createElement("button")
        const removeButton = document.createElement("button")
        interact.appendChild(readButton)
        interact.appendChild(removeButton)
    });
}