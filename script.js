let myLibrary = [];

function Book(title, author, pages, read) {
    self.title = title;
    self.author = author;
    self.pages = pages;
    self.read = read;
}

function addBook() {

}



const readBtn = document.querySelectorAll('#read');
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
