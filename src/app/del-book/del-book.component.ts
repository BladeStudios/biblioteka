import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-del-book',
  templateUrl: './del-book.component.html',
  styleUrls: ['./del-book.component.css']
})
export class DelBookComponent implements OnInit {
  @Output() delBook: EventEmitter<Book> = new EventEmitter();
  deleBook: Book = new Book(null, '', [], null, null);
  constructor() { }
  
  ngOnInit() {
  }

  delNewBook(){
    this.delBook.emit(this.deleBook);
    this.deleBook.$id = null;
  }

}
