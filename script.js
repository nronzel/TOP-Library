let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function addBook() {
//     const newCard = document.createElement('div');
//     const 
//     console.log(newCard);
// }

function markRead() {
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
        });
    });
}
markRead();
const modalCont = document.querySelector(".modal-container");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
// button to prompt for input
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
