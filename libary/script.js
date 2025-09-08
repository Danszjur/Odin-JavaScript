const mainElement = document.getElementById("main-element");

const addNewBookBtn = document.getElementById("add-new-book-btn");
const sendInBtn = document.getElementById("send-in");

addNewBookBtn.onclick = () => {
    showDialogElement();
}
sendInBtn.onclick = () => {
    closeDialogElement();
}

const myLibrary = [];

function Book(name, year, author, isRead = false, id) {
    this.name = name;
    this.year = year;
    this.author = author;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(newBook) {
    // take params, create a book then store it in the array
    myLibrary.push(newBook);
    return newBook;
}

let idCounter = 0;
function displayBook(bookElement) {
    const container = document.createElement("div");
    const NAME = document.createElement("h1");
    const YEAR = document.createElement("h3");
    const AUTHOR = document.createElement("h2");
    const IDOFBOOK = document.createElement("p");
    const subDiv1 = document.createElement("div");
    const ISREADBTN = document.createElement("button");
    const REMOVEBTN = document.createElement("button");

    NAME.textContent = bookElement.name;
    YEAR.textContent = bookElement.year;
    AUTHOR.textContent = bookElement.author;
    ISREADBTN.textContent = bookElement.isRead ? "Read ✅" : "Read ❌";
    REMOVEBTN.textContent = "Remove";
    IDOFBOOK.textContent = bookElement.id;

    container.className = "card";
    container.id = `card-${idCounter}`;

    ISREADBTN.addEventListener("click", () => {
        if (!bookElement.isRead) {
            bookElement.isRead = true;
        }
        else {
            bookElement.isRead = false;
        }
        ISREADBTN.textContent = bookElement.isRead ? "Read ✅" : "Read ❌";
    })
    REMOVEBTN.addEventListener("click", () => deleteBookByID(bookElement.id))

    const elementList = [NAME, YEAR, AUTHOR, IDOFBOOK, subDiv1,];

    subDiv1.appendChild(ISREADBTN);
    subDiv1.appendChild(REMOVEBTN);

    elementList.forEach((element) => {
        container.appendChild(element)
    })

    mainElement.appendChild(container)
    idCounter++;

}

function showDialogElement() {
    document.getElementById("new-book-add-panel").showModal();
}
function closeDialogElement() {
    document.getElementById("new-book-add-panel").close();
}

function displayAllBooks() {
    myLibrary.forEach(displayBook);
}
function deleteBookByID(idOfTheBook) {
    const searchedID = myLibrary.findIndex(idOfTheBook)
    if (searchedID !== -1) {
        myLibrary.splice(searchedID, 1)
    }
}

const book1 = new Book("Harry Potter", 1990, "JK Rolling");
const book2 = new Book("One Piece", 1999, "Oda Eiichiro");

addBookToLibrary(book1);
addBookToLibrary(book2);

displayAllBooks();


