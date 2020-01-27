import { Injectable } from '@angular/core';
import {Book } from './book';
import { BookList } from './bookList';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  getBooks() : Book[]{

    return[new Book(1,'title',['aut1','aut2'],2,4)];
  }

}
