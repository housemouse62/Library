const myLibrary = [
  {title:"Jurassic Park", author: "Michael Crichton", pages: "464", readYet: true, id: 5093423},
];

let html = ''

for (let index = 0; index < myLibrary.length; index++ ) {
  if (myLibrary[index].readYet === true) {
  html += `<li>I have read ${myLibrary[index].title} by ${myLibrary[index].author}</li>`;
} else {
  html += `<li>I still have to read ${myLibrary[index].title} by ${myLibrary[index].author}</li>`;
};
};

 myLibrary.forEach(book => {
  html += `${book.title}`
});

document.getElementById('library').innerHTML = html;

function Book(title, author, pages, readYet, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    this.id = id;
}

const addBook = document.querySelector(".addbook");
addBook.addEventListener('click', () => {
  doYouWantToAddABook();
});

function doYouWantToAddABook() {
    let addBook =  confirm("Would you like to add a new book?");
    addBook ? addBookToLibrary() : alert("ok, come back when you do!");
}

function addBookToLibrary() {
  let title = prompt("Book Title?");
  let author = prompt("Author?");
  let pages = prompt("How many pages?");
  let readyet = prompt("Have you read it yet? Y/N?")

  if (readyet === 'n' || 'N') {
    readyet = false
  } else {
    readyet = true
  } 
  const newBook = new Book(title, author, pages, readyet, id='');
  myLibrary.push(newBook);

 

  console.log(newBook);
  console.log(myLibrary)
  }

  