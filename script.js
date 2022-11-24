let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const bookContainer = document.querySelector('.book-container')

function addBook(book) {
    const newCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const markRead = document.createElement('button')
    const remove = document.createElement('button')

    newCard.classList.add('card')
    buttonGroup.classList.add('card-buttons')
    markRead.classList.add('button-style')
    remove.classList.add('button-style remove')
}

// changes button between READ and NOT READ states
function markRead() {
    const readBtn = document.querySelectorAll('#read-btn');
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
        });
    });
}
markRead();
const modalCont = document.querySelector(".modal-container");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");

function openModal() {
    modalCont.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    modalCont.classList.remove('active');
    overlay.classList.remove('active');
}
btnOpen.onclick = openModal;
overlay.onclick = closeModal;
btnClose.onclick = closeModal;
