const myLibrary = [];
const container = document.querySelector("#container");
const newTitle = document.querySelector("#newTitle");
const newAuthor = document.querySelector("#newAuthor");
const newPages = document.querySelector("#newPages");
const addBookButton = document.querySelector(".addBook"); 
let card;
let data;

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
addBookToLibrary("Diary of a Wimpy Kid", "Jeff Kinney", 224, true);
addBookToLibrary("Jurassic Park", "Michael Crichton", 464, true);

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
  container.innerHTML = '';

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

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.className = "removeButton";

    removeButton.addEventListener("click", (event) => {
    
    const findIt = myLibrary.map(item => item.id).indexOf(removeButton.dataset.id);
    console.log(findIt);
    myLibrary.splice(findIt, 1);

    displayBooks();
  });

    card.appendChild(removeButton);
    
    card.setAttribute("data-id", item.id);
    container.appendChild(card);

    removeButton.setAttribute("data-id", item.id);
    card.appendChild(removeButton);
    
  })};

 displayBooks();

const removeButton = document.querySelectorAll(".removeButton");

// Remove Book
  // removeButton.forEach((btn) => {
  // btn.addEventListener("click", (event) => {
    
  //   const findIt = myLibrary.map(item => item.id).indexOf(btn.dataset.id);
  //   console.log(findIt);
  //   myLibrary.splice(findIt, 1);

  //   displayBooks();
  // })});

  