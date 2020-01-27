import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Book } from './book'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class TaskHttpService {
    private url = 'http://localhost:8000/Books';

    constructor(private http: HttpClient) {}

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url);
    }
    addBook(book: Book) : Observable<Book> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post<Book>(this.url, book, httpOptions);
    }
    editBook(id: number, book: Book) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put<Book>('$(this.url)/$(id)', book, httpOptions);
    }
}