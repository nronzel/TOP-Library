class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (this.isInLibrary(newBook)) {
      alert("Book already exists!");
    } else {
      this.books.push(newBook);
    }
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }

  removeBook(title) {
    return this.books = this.books.filter((book) => book.title !== title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}

const library = new Library();
const bookContainer = document.querySelector(".book-container");

class Book {
  constructor(
    title = "undefined",
    author = "undefined",
    pages = "undefined",
    readYet = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
  }
}

const newBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("readYet").checked;
  return new Book(title, author, pages, read);
};

const createCard = (book) => {
  const newCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const markReadButton = document.createElement("button");
  const remove = document.createElement("button");

  // adds classes & ID
  newCard.classList.add("card");
  buttonGroup.classList.add("card-buttons");
  markReadButton.classList.add("button-style");
  markReadButton.setAttribute("id", "read-btn");
  remove.classList.add("remove", "button-style");

  markReadButton.onclick = toggleRead;
  remove.onclick = removeBook;

  // adds text content
  title.textContent = `"${book.title}"`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  remove.textContent = "Remove";

  // marks book read or not read
  if (book.readYet) {
    markReadButton.textContent = "READ";
    markReadButton.classList.add("mark-read");
    markReadButton.classList.remove("not-read");
  } else {
    markReadButton.textContent = "NOT READ";
    markReadButton.classList.add("not-read");
    markReadButton.classList.remove("mark-read");
  }

  // appends each element to the respective parent node
  newCard.appendChild(title);
  newCard.appendChild(author);
  newCard.appendChild(pages);
  buttonGroup.appendChild(markReadButton);
  buttonGroup.appendChild(remove);
  newCard.appendChild(buttonGroup);
  bookContainer.appendChild(newCard);
};

const updateBooksDisplay = () => {
  bookContainer.innerHTML = "";
  for (let book of library.books) {
    createCard(book);
  }
};

const toggleRead = (e) => {
  let title =
    e.target.parentElement.parentElement.firstChild.textContent.replaceAll(
      '"',
      ""
    );
  let book = library.getBook(title);
  book.readYet = !book.readYet;
  updateBooksDisplay();
};

const addBook = (e) => {
  e.preventDefault();
  const book = newBookFromInput();

  if (library.isInLibrary(book)) {
    alert("This book already exists in your library");
    return;
  }
  library.addBook(book);
  updateBooksDisplay();
  closeModal();
};

const removeBook = (e) => {
  const title =
    e.target.parentElement.parentElement.firstChild.textContent.replaceAll(
      '"',
      ""
    );
  console.log(title);
  library.removeBook(title);
  updateBooksDisplay();
};

// Modal Section //
const modalCache = {
  modalCont: document.querySelector(".modal-container"),
  btnOpen: document.querySelector(".btn-open"),
  btnClose: document.querySelector(".btn-close"),
  overlay: document.querySelector(".overlay"),
  modalSubmit: document.querySelector(".modal-submit"),
};

const openModal = () => {
  const bookForm = document.querySelector("#bookForm");
  bookForm.reset();
  modalCache.modalCont.classList.add("active");
  modalCache.overlay.classList.add("active");
};

const closeModal = () => {
  modalCache.modalCont.classList.remove("active");
  modalCache.overlay.classList.remove("active");
};

modalCache.btnOpen.onclick = openModal;
modalCache.overlay.onclick = closeModal;
modalCache.btnClose.onclick = closeModal;
modalCache.modalSubmit.onclick = addBook;
