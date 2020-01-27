import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Output() editBook: EventEmitter<Book> = new EventEmitter();
  @Input() books: Book[];

  constructor(private bookService: BookService) { 
    this.books = bookService.getBooks();
}
  
  ngOnInit() {
  }

  onEdit(option: Book){
      this.editBook.emit(option);
  }

}
