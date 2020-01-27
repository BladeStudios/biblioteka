import { BookService } from './book.service';
import { Component } from '@angular/core';
import { Book } from './book'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteka';
  BookList: Array<Book>;

  constructor(private BookService: BookService) {
    this.BookList = BookService.getBooks();
  }

  addBook(book: Book) {
    this.BookList.push(new Book(book.$id,book.$title,book.$authors,book.$releaseYear,book.$ISBN));
    
  }

  delBook(book: Book) {
    let index = this.BookList.lastIndexOf(book);
    this.BookList.splice(index,1);
  }
}
