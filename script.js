const myLibrary = [];
const container = document.querySelector("#container");
const newTitle = document.querySelector("#newTitle");
const newAuthor = document.querySelector("#newAuthor");
const newPages = document.querySelector("#newPages");
const readIt = document.querySelector("#readIt");
const addBookButton = document.querySelector(".addBook"); 
let card;
let data;

let html = '';



// Book Constructor
function Book(title, author, pages, readIt, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt;
    this.id = id;
}

if (myLibrary.length === 0) {
addBookToLibrary("Diary of a Wimpy Kid", "Jeff Kinney", 224, true);
addBookToLibrary("Jurassic Park", "Michael Crichton", 464, false);

};

addBookButton.addEventListener('click', (event) => {
    console.log(readIt.checked)
  addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, readIt.checked);
  
  displayBooks();
  event.preventDefault();
});

// Add Book to myLibrary Array
function addBookToLibrary(title, author, pages, readIt) {
  id = crypto.randomUUID();
  const newBook = new Book(title, author, pages, readIt, id);
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

    if (item.readIt === true) {
    const readIt = document.createElement('h5');
    readIt.textContent = 'Read It';
    card.appendChild(readIt);
    };

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.className = "removeButton";

    const toggleStatus = document.createElement('button');
    toggleStatus.innerText = 'Read';
    toggleStatus.className = 'readButton';
    toggleStatus.addEventListener("click", (event) => item.changeReadStatus());

    removeButton.addEventListener("click", (event) => {
    const findIt = myLibrary.map(item => item.id).indexOf(removeButton.dataset.id);
    console.log(findIt);
    myLibrary.splice(findIt, 1);

    displayBooks();
  });
    card.appendChild(toggleStatus);
    card.appendChild(removeButton);
    
    card.setAttribute("data-id", item.id);
    container.appendChild(card);

    removeButton.setAttribute("data-id", item.id);
    card.appendChild(removeButton);
    
  })};

 displayBooks();

Book.prototype.changeReadStatus = function() {
  if (this.readIt === true) {
    this.readIt = false
  } else {
    this.readIt = true
  };
  displayBooks();
}
const removeButton = document.querySelectorAll(".removeButton");

  