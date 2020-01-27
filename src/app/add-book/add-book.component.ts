import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
@Output() addBook: EventEmitter<Book> = new EventEmitter();

newBook: Book = new Book(null,'',[""],null,null);
books: Array<Book>;
//newBook: Book;

  constructor(private bookService: BookService) { 
      this.books = bookService.getBooks();
  }

  ngOnInit() {
  }

  addNewBook(){
    this.newBook.$id=this.books[this.books.length-1].$id+1;
    console.log(this.newBook);
    this.books.push(this.newBook);
    this.addBook.emit(this.newBook);
    this.newBook.$title='';
    this.newBook.$authors=[];
    this.newBook.$releaseYear=null;
    this.newBook.$ISBN=null;
    //let lastId = this.books.length;
    //let newBook: Book = new Book(lastId,title,[author],releaseYear,isbn);
    //this.books.push(newBook);
    /*{
      id: lastId+1,
      title: title,
      authors: [author],
      releaseYear: releaseYear,
      ISBN: isbn
    }*/
    /*this.addBook.emit(this.newBook);
    this.newBook.$id = null;
    this.newBook.$id = this.books.length;
    this.newBook.$title = '';
    this.newBook.$authors = [""];
    this.newBook.$releaseYear = null;
    this.newBook.$ISBN = null;*/

  }

}
