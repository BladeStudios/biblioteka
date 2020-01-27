import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service'
import { Book } from '../book'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
@Input() BookList: Book[];
  constructor() { }

  ngOnInit() {
  }

}
