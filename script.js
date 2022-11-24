let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    const newCard = document
        .createElement('div')
        .classList("card");
    console.log(newCard);
}

const readBtn = document.querySelectorAll('#read-btn');
// changes button between READ and NOT READ states
readBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const arr = Array.from(button.classList)
        if (arr.includes('mark-read')) {
            button.classList.add('not-read');
            button.classList.remove('mark-read')
            button.textContent = "NOT READ";
        } else if (arr.includes('not-read')) {
            button.classList.add('mark-read');
            button.classList.remove('not-read')
            button.textContent = "READ";
        }
    })
})

// button to prompt for input
function buttonListen() {
    const formBtn = document.querySelector(".btn-open");
    formBtn.addEventListener('click', () => {
        formPrompt();
    })
}

function formPrompt() {
    let title = prompt("Book Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Pages: ");
    const newBook = new Book(title, author, pages, false);
    myLibrary.unshift(newBook);
}

