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
    removeAllChildren();

    myLibrary.forEach((book ,index) => {
        //create book element
        const newBook = document.createElement("div");
        newBook.className = "book"
        bookSection.appendChild(newBook);
        
        //create book cover section
        const cover = document.createElement("div");
        cover.className = "book-cover"
        newBook.appendChild(cover)
        
        //create book interact section
        const interact = document.createElement("div");
        interact.className = "book-interact"
        newBook.appendChild(interact)
        
        //create book title
        const title = document.createElement("h1")
        title.textContent = book.name
        cover.appendChild(title)
        
        //create book author
        const author = document.createElement("h3")
        author.textContent = book.author
        cover.appendChild(author)
        
        //create book pages number
        const pages = document.createElement("h4")
        pages.textContent = book.pages
        cover.appendChild(pages)
        
        //create book read or not text
        const hasRead = document.createElement("h5")
        if(book.read == false) hasRead.textContent = "Not Read"
        else hasRead.textContent = "Read"
        cover.appendChild(hasRead)
        
        //create book read or not button
        const readButton = document.createElement("button")
        if(book.read == false) readButton.textContent = "Read"
        else readButton.textContent = "Remove Read"
        readButton.addEventListener("click",(Event)=> enableRead(book ,hasRead))
        interact.appendChild(readButton)
        
        //create book remove button
        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove Book"
        removeButton.addEventListener("click", (Event)=> removeBook(index))
        interact.appendChild(removeButton)
        // bookNumber++;
    });
}

function removeAllChildren(){
    bookSection.querySelectorAll(".book").forEach(book => book.remove());
}

function enableRead(currentBook, readElement){
    if(currentBook.read == false) {
        currentBook.read = true;
        readElement.textContent = "Read"
    }
    else{ 
        currentBook.read = false;
        readElement.textContent = "Not Read"
    }
    
    console.log(currentBook.read);
}

function removeBook(number){
    myLibrary.splice(number, 1);
    console.log(myLibrary);
    showBooks();
}