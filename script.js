const myLibrary = [];
const container = document.querySelector("#container");
const newTitle = document.querySelector("#newTitle");
const newAuthor = document.querySelector("#newAuthor");
const newPages = document.querySelector("#newPages");
const addBookButton = document.querySelector(".addBook"); 
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

addBookButton.addEventListener('click', (event) => {
  addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, true);
  
  displayBooks();
  event.preventDefault();
});

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



// get elements from HTML
//document.getElementById('library').innerHTML = html;