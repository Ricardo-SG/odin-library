/* The array that is gonna contain the books for this exercise */
let myLibrary = new Array();


/* constructor for the object Book */
function Book(author, title, pages, isRead) {
  // the constructor...
  this.author = author;
  this.title  = title ;
  this.pages  = pages ;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.isread?'read':'not read'}`;
  }
  this.addBookToLibrary = function () {
    myLibrary.push(this);
}
}



/* Here the code that will always run when loading the page */
const buttonNewBook = document.getElementById("btn-new-book");
buttonNewBook.addEventListener("click", aNewBookAppears);

/* For the sake of having info, I'm adding all those books */
myLibrary = [new Book('Por si las voces vuelven', 'Ángel Martín', '256', true),
             new Book('The song of Achilles', 'Madeline Miller', '320', true),
             new Book('Circe', 'Madeline Miller', '256', true),
             new Book('the papyrus of Saqqara', 'Pauline Gedge', '256', true),
             new Book('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', '256', true),
             new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', '256', true),
             new Book('am I even a real book?', 'Ángel Martín', '256', false),
             new Book('Do I have to be a real book?', 'Ángel Martín', '256', false),
             new Book('Teo goes to the school', 'Ángel Martín', '256', false),
             new Book('I wish I\'d be millionaire', 'Ángel Martín', '256', false),
];


/* Now we gonna build the html page with the library */
//myLibrary.forEach( (item, index) => {addBookToDom(item, index)});
recreatePage();





