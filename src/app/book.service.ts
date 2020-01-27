import { Injectable } from '@angular/core';
import {Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks() : Book[]{
    return[new Book(1,'as','as',2,4)];
  }

}
