import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-del-book',
  templateUrl: './del-book.component.html',
  styleUrls: ['./del-book.component.css']
})
export class DelBookComponent implements OnInit {
  @Output() delBook: EventEmitter<Book> = new EventEmitter();
  @Input() books: Book[];

  constructor(private bookService: BookService) { 
    this.books = bookService.getBooks();
}
  
  ngOnInit() {
  }

  onDelete(option: Book){
      this.delBook.emit(option);
  }

}
