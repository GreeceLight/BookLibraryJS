const addBookButton = document.querySelector(".add-book");
const form = document.querySelector(".form");
const addBook = document.querySelector("#add-to-library");
const cancelAdd = document.querySelector("#cancel-add");
const bookName = document.getElementById("bookName")
const bookAuthor = document.getElementById("bookAuthor")
const bookPages = document.getElementById("bookPages")
const bookRead = document.getElementById("bookRead")
const bookSection = document.querySelector(".book-section");

addBookButton.addEventListener("click", function(){
    form.style.visibility = "visible"
})
addBook.addEventListener("click", function(){
    form.style.visibility = "hidden"
    addBookToLibrary()
})
cancelAdd.addEventListener("click", function(){
    form.style.visibility = "hidden"
})

let myLibrary = [];

function Book(name, author, pages, read) {
    //Get book name and put it in variable
    //Get book author and put it in variable
    //Get book pages and put it in variable
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    if(checkBookValues() == 3){
        let book = new Book(
            bookName.value,
            bookAuthor.value,
            bookPages.value,
            bookRead.checked)
        myLibrary.push(book);
        showBooks();
    }
    else{
        return
    }
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
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        cover.style.backgroundColor = "#" + randomColor;
        newBook.appendChild(cover)
        
        //create book interact section
        const interact = document.createElement("div");
        interact.className = "book-interact"
        newBook.appendChild(interact)
        
        //create book title
        const title = document.createElement("h1")
        createBookElement(title, cover, book.name)
        
        //create book author
        const author = document.createElement("h3")
        createBookElement(author, cover, book.author)
        
        //create book pages number
        const pages = document.createElement("h4")
        createBookElement(pages, cover, book.pages)
        
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

function createBookElement(element, parent, book){
    element.textContent = book;
    parent.appendChild(element);
}

function checkBookValues(){
    let allGoodNumber = 0
    if(bookName.value != "") allGoodNumber++
    else {
        alert("You Need to put in a Valid Name!")
    }
    if (bookAuthor.value != "") {
        allGoodNumber++ 
    } else {
        alert("You Need to put in a Valid Author!")
    }
    if (bookPages.value != "") {
        allGoodNumber++
    } else {
        alert("You Need to put in a Valid Page Number!")
    }
    return allGoodNumber;
}