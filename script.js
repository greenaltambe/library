const myLibrary = [
	{
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		pages: 295,
		read: true,
	},
	{
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		pages: 1178,
		read: true,
	},
];

// html
const newBookButton = document.getElementById("new-book");
const dialog = document.getElementById("dialog");
const addBook = document.getElementById("add-book");
const booksContainer = document.getElementById("books-container");

document.addEventListener("DOMContentLoaded", () => {
	displayAllBooks();
});

newBookButton.addEventListener("click", () => {
	dialog.showModal();
});

addBook.addEventListener("click", (e) => {
	e.preventDefault();
	if (!addInputBook()) return;
	dialog.close();
});

// Add book to DOM
function putBookToDOM(title, author, pages, readDiv, remove) {
	const book = document.createElement("div");
	book.classList.add("book");

	book.appendChild(title);
	book.appendChild(author);
	book.appendChild(pages);
	book.appendChild(readDiv);
	readDiv.classList.add("read-container");
	book.appendChild(remove);
	remove.classList.add("remove-btn");
	booksContainer.appendChild(book);
}

// Display all books to DOM
function displayAllBooks() {
	booksContainer.innerHTML = "";
	myLibrary.forEach((book) => {
		const title = document.createElement("h3");
		const author = document.createElement("p");
		const pages = document.createElement("p");
		const readDiv = document.createElement("div");
		const read = document.createElement("input");
		const readLabel = document.createElement("p");
		const remove = document.createElement("button");

		title.textContent = book.title;
		author.textContent = book.author;
		pages.textContent = `${book.pages} pages`;
		readLabel.textContent = "Read";
		remove.addEventListener("click", () => {
			myLibrary.splice(myLibrary.indexOf(book), 1);
			console.log(myLibrary);
			displayAllBooks();
		});
		remove.textContent = "Remove";

		if (book.read) {
			read.setAttribute("type", "checkbox");
			read.setAttribute("checked", "checked");
		} else {
			read.setAttribute("type", "checkbox");
		}

		read.addEventListener("click", () => {
			if (read.checked) {
				book.read = true;
			} else {
				book.read = false;
			}
			console.log(`${book.title} read status: ${book.read}`);
		});

		readDiv.appendChild(read);
		readDiv.appendChild(readLabel);
		putBookToDOM(title, author, pages, readDiv, remove);
	});
}

function addInputBook() {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const pages = document.getElementById("pages").value;
	const read = document.getElementById("read").checked;

	if (!title || !author || !pages) {
		alert("Please fill in all fields");
		return false;
	}

	addBookToLibrary(title, author, pages, read);
	return true;
}

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);
	console.log(title, author, pages, read);
	myLibrary.push(book);
	displayAllBooks();
	console.log(`${book.title} added to library`);
	console.log(myLibrary);
}
