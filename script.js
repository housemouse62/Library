const myLibrary = [];
const container = document.querySelector("#container");
let card;

let html = '';

// Book Constructor
function Book(title, author, pages, readYet, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    this.id = id;
}

if (myLibrary.length === 0) {
addBookToLibrary("Jurassic Park", "Michael Crichton", 464, true);
addBookToLibrary("Diary of a Wimpy Kid", "Jeff Kinney", 224, true);
};

// Add Book to myLibrary Array
function addBookToLibrary(title, author, pages, readYet) {
  id = crypto.randomUUID();
  const newBook = new Book(title, author, pages, readYet, id);
  myLibrary.push(newBook);
};

// Display Book
function displayBooks() {
  myLibrary.forEach(item => {
    card = document.createElement('div');
    card.classList = 'book';

    const title = document.createElement('h4');
    title.textContent = `Title: ${item.title}`;
    card.appendChild(title);

    const author = document.createElement('h5');
    author.textContent = `Written by: ${item.author}`;
    card.appendChild(author);

    const pages = document.createElement('h5');
    pages.textContent = `Pages: ${item.pages}`;
    card.appendChild(pages);

    container.appendChild(card);
  })};

 displayBooks();
// 

// function bookPrompts() {
//   bookName = prompt("What book would you like to add?");
//   writer = prompt("Who wrote this book?");
//   num = prompt("How many pages does this book have?");
//   read = prompt("Have you read the book yet?");
//   addBookToLibrary(bookName, writer, num, read)
// }
// Initial Libray if it's currently empty




// get elements from HTML
document.getElementById('library').innerHTML = html;


const addBook = document.querySelector(".addbook");
// addBook.addEventListener('click', () => {
//   doYouWantToAddABook();
// });

// function doYouWantToAddABook() {
//     let addBook =  confirm("Would you like to add a new book?");
//     addBook ? bookPrompts() : alert("ok, come back when you do!");
// }