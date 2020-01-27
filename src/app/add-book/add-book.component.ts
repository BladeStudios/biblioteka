import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
@Output() addBook: EventEmitter<Book> = new EventEmitter();
@Input() books: Book[];
newBook: Book = new Book(null,'',[""],null,null);
//books: Array<Book>;


  constructor(private bookService: BookService) { 
      this.books = bookService.getBooks();
  }


  ngOnInit() {
    

  
  }

  addNewBook(){
    this.newBook.$id=this.books[this.books.length-1].$id+1;
    console.log(this.newBook);
    this.addBook.emit(this.newBook);
    this.newBook.$title='';
    this.newBook.$authors=[];
    this.newBook.$releaseYear=null;
    this.newBook.$ISBN=null;

  }
 

}
