/* Function to add a card with a book in the HTML DOM */
function addBookToDom (book, index) {

    /* 1) we recover the father that will append each card */
    const article = document.getElementById("article");
    
    /* 2) We create the card that will hold a book */
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute('data-index', index);
    
    /* 3) we create the four <p> that will have the data */
    const pAuthor = document.createElement("p");
    const pTitle  = document.createElement("p");
    const pPages  = document.createElement("p");
    const pRead   = document.createElement("p");
    
    pAuthor.className = "text-card";
    pTitle.className  = "text-card";
    pPages.className  = "text-card";
    pRead.className   = "text-card";
    
    pAuthor.textContent = book.author;
    pTitle.textContent  = book.title;
    pPages.textContent  = book.pages;
    pRead.textContent   = book.isRead ? 'read':'not read';
    
    /* 4) We create the buttons to delete or mark read/unread the book */
    const btnRead   = document.createElement("button");
    const btnDelete = document.createElement("button");
    
    btnRead.className = "readMe";
    btnDelete.className = "delete";
    
    btnRead.setAttribute('data-index', index);
    btnDelete.setAttribute('data-index', index);
    
    btnRead.innerText = "Read/unread";
    btnDelete.innerText = "Delete this book";
    
    
    
    /* 5) we start to append everything in the html */
    card.appendChild(pAuthor);
    card.appendChild(pTitle);
    card.appendChild(pPages);
    card.appendChild(pRead);
    card.appendChild(btnRead);
    card.appendChild(btnDelete);
    article.appendChild(card);
    
    /* 6) Listeners para los botones */
    btnDelete.addEventListener("click", function () { deleteBook(index)});
    btnRead.addEventListener("click", function () { changeRead(index)});
    
}
    
function deleteBook(index) {
    console.log("<deleteBook>");
        myLibrary.splice(index, 1);
        recreatePage();
}  

function changeRead(index) {
        myLibrary[index].isRead = myLibrary[index].isRead? false:true; 
        recreatePage();
}
    
/* Function to add a new book inputted by the html */
function aNewBookAppears() {
      
      const iAuthor = document.getElementById("iAuthor");
      const iTitle  = document.getElementById("iTitle");
      const iPages  = document.getElementById("iPages");
      const iRead   = document.getElementById("iRead");
    
      const newBook = new Book(iAuthor.value,
                               iTitle.value,
                               iPages.value,
                               iRead.checked?'read':'not read');
      newBook.addBookToLibrary();
      
      addBookToDom(newBook, myLibrary.length-1); 
    
}


function recreatePage() {
    console.log("<recreatePage>");
    const cards      = document.querySelectorAll(".card");
    const textCards  = document.querySelectorAll(".text-card");
    const readMe     = document.querySelectorAll(".readMe");
    const deleteMe   = document.querySelectorAll(".deleteMe");



    cards.forEach(element =>     { element.remove();});
    textCards.forEach(element => { element.remove();});
    readMe.forEach(element =>    { element.remove();});  
    deleteMe.forEach(element =>  { element.remove();});

    /* Now we gonna build the html page with the library */
    myLibrary.forEach( (item, index) => {addBookToDom(item, index)});
    
}
