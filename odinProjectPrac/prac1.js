function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function info() {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
