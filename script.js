let myLibrary = [];


// constructor function to create book objects

function Book(title="undefined", author="undefined", pages="0", read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// global selectors

const bookContainer = document.querySelector('.book-container')
const modalCont = document.querySelector(".modal-container");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
const modalSubmit = document.querySelector(".modal-submit")


// creates a new card

const newBookCard = (book) => {
    const setIndex = myLibrary.length - 1;
    const newCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const markRead = document.createElement('button')
    const remove = document.createElement('button')

    // console.log(getIndex);
    
    const readYet = document.getElementById('readYet').checked

    // adds classes & ID

    newCard.setAttribute('id', setIndex)
    newCard.classList.add('card')
    buttonGroup.classList.add('card-buttons')
    markRead.classList.add('button-style')
    markRead.setAttribute('id', 'read-btn')
    remove.classList.add('remove', 'button-style')

    // if the checkbox is checked, mark book as read, otherwise not read

    if (readYet === true) {
        markRead.classList.add('mark-read')
        markRead.textContent = 'READ';
        markRead.setAttribute('value', 'read')
    } else {
        markRead.classList.add('not-read')
        markRead.textContent = 'NOT READ'
        markRead.setAttribute('value', 'not-read')
    }

    // adds text content

    title.textContent = `"${book.title}"`
    author.textContent = `${book.author}`
    pages.textContent = `${book.pages} pages`
    remove.textContent = "Remove"

    // appends each element to the respective parent node

    newCard.appendChild(title)
    newCard.appendChild(author)
    newCard.appendChild(pages)
    buttonGroup.appendChild(markRead)
    buttonGroup.appendChild(remove)
    newCard.appendChild(buttonGroup)
    bookContainer.appendChild(newCard)

    // changes the "mark read" button status from read to unread and vice versa
    changeReadButton();

    remove.onclick = removeBook
}

// listens for click on the submit button on modal

modalSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const newBook = getBookInput()
    myLibrary.push(newBook);
    updateDisplay(newBook);
    closeModal();
    console.log(myLibrary);
})

// gets the data input on the form

const getBookInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('readYet').checked
    return new Book(title, author, pages, read)
}

// changes the Mark Read button status
const changeReadButton = () => {
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

// remove book from library

const removeBook = () => {
    const removeBtn = document.querySelector(".remove")

    removeBtn.parentElement.parentElement.outerHTML = ""



    myLibrary.splice(this.title, 1)
}

// updates book display

const updateDisplay = (book) => {
    newBookCard(book);
}

// modal functionality 

const openModal = () => {
    bookForm.reset();
    modalCont.classList.add('active');
    overlay.classList.add('active');
}

const closeModal = () => {
    modalCont.classList.remove('active');
    overlay.classList.remove('active');
}

btnOpen.onclick = openModal;
overlay.onclick = closeModal;
btnClose.onclick = closeModal;
