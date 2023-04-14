let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	/*
    this.info = function() {
		return title + ", " + author + ", there are " + pages + " pages, " + read;
	};
    */
}

function addBookToLibrary(title, author,pages, read) {
	myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R.Tolkien", "295", "read");
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K Rowling", "223", "read");


function displayBooks() {
	for (let i = 0 ; i < myLibrary.length ; i++) {
		console.log(myLibrary[i]);
	}
}

displayBooks();