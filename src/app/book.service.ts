import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { Book } from '../book.model';

// export interface Book {
//   id: number;
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   completed: boolean;
// }

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private bookArray: Book[] = [];
  private booksSubject = new BehaviorSubject<Book[]>(this.bookArray);

  // addBook(title: string, author: string, year: number, genre: string) {
  //   const newBook: Book = {id: this.nextId++, title, author, year, genre};
  //   this.bookArray.push(newBook);
  // }

  addBook(title: string, author: string, year: number, genre: string) {
    const newBook: Book = {
      id: this.bookArray.length + 1,
      title,
      author,
      year,
      genre,
      completed: false
    };
    this.bookArray = [...this.bookArray, newBook];
    this.booksSubject.next(this.bookArray);
  }

  getBooks() {
    return this.booksSubject.asObservable();
  }

  toggleBookCompletion(id: number) {
    this.bookArray = this.bookArray.map(book =>
      book.id === id ? {...book, completed: !book.completed} : book);
    this.booksSubject.next(this.bookArray);
  }

  deleteBook(id: number) {
    this.bookArray = this.bookArray.filter(book => book.id !== id);
    this.booksSubject.next(this.bookArray);
  }
}
