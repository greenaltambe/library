const myLibrary = [];

// html
const newBookButton = document.getElementById("new-book");
const dialog = document.getElementById("dialog");

newBookButton.addEventListener("click", () => {
	dialog.showModal();
});

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	// take params, create a book then store it in the array
	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
}
