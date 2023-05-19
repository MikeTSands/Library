//create variables forlater use and event listener to open and close the form

const addBtn = document.getElementById("add-button");
const popUpForm = document.getElementById("new-book-form");
const saveBtn = document.getElementById("save");
const closeBtn = document.getElementById("close");
let newBook;
const library = document.getElementById("library");
const bookCount = document.getElementById("book-count");
const booksRead = document.getElementById("books-read");
const booksNotRead = document.getElementById("books-not-read");

addBtn.addEventListener("click", () => popUpForm.style.display = "block");
closeBtn.addEventListener("click", () => popUpForm.style.display = "none");

//create book constructor 

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

//create library and function to add new books to it

let myLibrary = [
	{
		title: "The Hobbit",
		author: "J.R.R Tolkien",
		pages: "295",
		read: true,
	},

	{
		title: "Harry Potter and the Philosopher's Stone",
		author: "J.K Rowling",
		pages: "223",
		read: false,
	}
];

//Function to add a book to library.
function addBookToLibrary(event) {

	popUpForm.style.display = "none";
	event.preventDefault();

	title = popUpForm.title.value;
	author = popUpForm.author.value;
	pages = popUpForm.pages.value;
	read = popUpForm.read.checked;

	newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	displayBooks();
}

saveBtn.addEventListener("click", addBookToLibrary);

//display books in myLibrary array

function displayBooks() {

	while(library.firstChild) {
		library.removeChild(library.firstChild);
	}
	
	for (let i = 0 ; i < myLibrary.length ; i++) {

		let index = i;
		let card = document.createElement("div");
		card.classList.add("card");
		library.appendChild(card);

		let bookTitle = document.createElement("div");
		let bookAuthor = document.createElement("div");
		let bookPages = document.createElement("div");
		let readBtn = document.createElement("button");
		readBtn.classList.add("read-button");
		readBtn.setAttribute("onclick", `toggleRead(${i})`);
		let removeBtn = document.createElement("button");
		removeBtn.classList.add("remove-button");
		removeBtn.setAttribute("onclick", "removeBook()");

		card.appendChild(bookTitle);
		card.appendChild(bookAuthor);
		card.appendChild(bookPages);
		card.appendChild(readBtn);
		card.appendChild(removeBtn);

		bookTitle.innerHTML = "Title: " + myLibrary[i].title;
		bookAuthor.innerHTML = "By: " + myLibrary[i].author;
		bookPages.innerHTML = "Number of pages: " + myLibrary[i].pages;
		if (myLibrary[i].read === false) {
			readBtn.textContent = "Not read";
			readBtn.style.backgroundColor = "red";
		} else {
			readBtn.textContent = "Read";
			readBtn.style.backgroundColor = "green";
		}
		removeBtn.textContent = "Remove";

	}
}

displayBooks();

//Function to count books for log.  Currently unable to count added books as they are not saved in myLibrary array

function displayLibraryLog() {
	let count = 0;
	let haveRead = 0;
	let notRead = 0;
	myLibrary.forEach(e => {
		count ++;
		if (e.read == true) {
			haveRead ++;
		} else {
			notRead ++;
		}
	});
	bookCount.innerHTML = count;
	booksRead.innerHTML = haveRead;
	booksNotRead.innerHTML = notRead;
}

displayLibraryLog();

// Function to remove books

function removeBook(index) {
	myLibrary.splice(index, 1);
	displayBooks();
	displayLibraryLog();
}

//Function to toggle read status

function toggleRead(index) {
	if (myLibrary[index].read == true) {
		myLibrary[index].read = false;
	} else {
		myLibrary[index].read = true;
	}
	displayBooks();
	displayLibraryLog();
}