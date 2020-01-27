import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
@Output() addBook: EventEmitter<Book> = new EventEmitter();
newBook: Book = new Book(1,'','',null,null);
  constructor() { }

  ngOnInit() {
  }

  addNewBook() {
    this.addBook.emit(this.newBook);
    this.newBook.$id = null;
    this.newBook.$title = '';
    this.newBook.$authors = '';
    this.newBook.$releaseYear = null;
    this.newBook.$ISBN = null;
  }

}
