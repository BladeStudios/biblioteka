import { Injectable } from '@angular/core';
import {Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  getBooks() : Book[]{

    return[new Book(1,'title',['autor1','autor2'],2020,123456789)];
  }

}
