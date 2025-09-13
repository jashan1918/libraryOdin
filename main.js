const myLibrary = [];

function Book (name, author, pages, readStatus) {

//constructor goes here!

    this.uuid = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus
}

function addBookToLibrary (newBook) {
//the logic for adding book to the library goes here!

myLibrary.push(newBook)

}
// Adding 5 sample books
addBookToLibrary(new Book("Atomic Habits", "James Clear", 280, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, false));
addBookToLibrary(new Book("The Alchemist", "Paulo Coelho", 208, true));
addBookToLibrary(new Book("Sapiens", "Yuval Noah Harari", 443, false));
addBookToLibrary(new Book("Deep Work", "Cal Newport", 304, true));


function displayBooks() {
const container = document.getElementById("library-container");




     // Clear existing books before re-rendering
     container.innerHTML = '';

    myLibrary.forEach((book) => {

        // create a card div
        const card = document.createElement("div");
            card.classList.add('book-card');

    // Add book info
    const title = document.createElement('h3');
    title.textContent = book.name;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement('p');
    read.textContent = `Read: ${book.readStatus ? "Yes" : "No"}`;

    // Append info to card
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    //create a remove book button
     const remove = document.createElement("button");
     remove.textContent = "remove";
     
     card.appendChild(remove)

     remove.addEventListener('click', () => {


  // Remove card from DOM
  card.remove();


});



        
    // Append card to container
    container.appendChild(card);
        
    })
}

displayBooks();


const form = document.getElementById("book-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("book-title").value.trim();
    const author = document.getElementById("book-author").value.trim();
    const pages = document.getElementById("book-pages").value.trim();
      const readStatus = document.getElementById('readStatus').checked;

      const newBook = new Book(title, author, pages, readStatus);
      addBookToLibrary(newBook);

      displayBooks();

      form.reset();

})