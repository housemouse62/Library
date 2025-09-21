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

    const topBlock = document.createElement('div');
    topBlock.className = 'topBlock';
    card.appendChild(topBlock);

    const title = document.createElement('h4');
    title.textContent = `${item.title}`;
    topBlock.appendChild(title);

    const author = document.createElement('h5');
    author.textContent = `${item.author}`;
    topBlock.appendChild(author);

    const pages = document.createElement('h5');
    if (item.pages !== '') {
    pages.textContent = `${item.pages} pgs`;};
    topBlock.appendChild(pages);

    
    
    

    const bottomBlock = document.createElement('div');
    bottomBlock.className = 'bottomBlock';
    card.appendChild(bottomBlock);

    const readIcon = document.createElement('img');
    readIcon.className = 'readIcon';
    if (item.readIt === true) {
      readIcon.src = "./Images/checkbox-marked-outline.svg";
    } else {
      readIcon.src = "./Images/checkbox-blank-outline.svg";
    //const readIt = document.createElement('h5');
    //readIt.textContent = 'Read It';
    };
     bottomBlock.appendChild(readIcon);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.className = "removeButton";

    const toggleStatus = document.createElement('button');
    toggleStatus.innerText = 'Read';
    toggleStatus.className = 'readButton';
    toggleStatus.addEventListener("click", (event) => item.changeReadStatus());
    bottomBlock.appendChild(toggleStatus);

    removeButton.addEventListener("click", (event) => {
    const findIt = myLibrary.map(item => item.id).indexOf(removeButton.dataset.id);
    console.log(findIt);
    myLibrary.splice(findIt, 1);

    displayBooks();
  });
    
    card.setAttribute("data-id", item.id);
    container.appendChild(card);

    removeButton.setAttribute("data-id", item.id);
    bottomBlock.appendChild(removeButton);
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

  