
const container = document.querySelector("#container");
const newTitle = document.querySelector("#newTitle");
const newAuthor = document.querySelector("#newAuthor");
const newPages = document.querySelector("#newPages");
const readIt = document.querySelector("#readIt");
const addBookButton = document.querySelector(".addBook"); 

let html = '';



// Book Constructor
class Book {
  constructor(title, author, pages, readIt, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt;
    this.id = id;
};

  changeReadStatus() {
    this.readIt = !this.readIt;
}
};

addBookButton.addEventListener('submit', (event) => {
  library.addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, readIt.checked);
  
  ui.displayBooks(library.books);
  event.preventDefault();
});

// Add Book to library Array
class Library {
  constructor() {
    this.books = [];
  }

    addBookToLibrary(title, author, pages, readIt, id = crypto.randomUUID()) {
      const newBook = new Book(title, author, pages, readIt, id);
      this.books.push(newBook)
  }
};
class UI {
  constructor(){}
  
  displayBooks(bookArray = []) {
    container.innerHTML = '';

    bookArray.forEach(item => {
      const card = document.createElement('div');
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
      readIcon.src = item.readIt ? "./Images/checkbox-marked-outline.svg" :  "./Images/checkbox-blank-outline.svg";
      bottomBlock.appendChild(readIcon)

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.className = "removeButton";

    const toggleStatus = document.createElement('button');
    toggleStatus.innerText = 'Read';
    toggleStatus.className = 'readButton';
    toggleStatus.addEventListener("click", (event) => {item.changeReadStatus()
      readIcon.src = item.readIt ? 
        "./Images/checkbox-marked-outline.svg" :
        "./Images/checkbox-blank-outline.svg"
      })
    bottomBlock.appendChild(toggleStatus);

    removeButton.addEventListener("click", (event) => {
    const findIt = bookArray.map(item => item.id).indexOf(removeButton.dataset.id);
    bookArray.splice(findIt, 1);
    
    const removeBook = document.querySelector(`[data-id="${removeButton.dataset.id}"]`);
    if (removeBook) {
      removeBook.remove()
    }
  });
    
    card.setAttribute("data-id", item.id);
    container.appendChild(card);

    removeButton.setAttribute("data-id", item.id);
    bottomBlock.appendChild(removeButton);
  })};
};

const library = new Library();
const ui = new UI();

if (library.books.length === 0) {
  library.addBookToLibrary("Diary of a Wimpy Kid", "Jeff Kinney", 224, true);
  library.addBookToLibrary("Jurassic Park", "Michael Crichton", 464, false);

};

ui.displayBooks(library.books);
  