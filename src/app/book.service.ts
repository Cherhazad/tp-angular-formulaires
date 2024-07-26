import { Injectable } from '@angular/core';
import {Book} from "../book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private bookArray: Book[] = [];
  private nextId = 1;

  addBook(title: string, author: string, year: number, genre: string) {
    const newBook: Book = {id: this.nextId++, title, author, year, genre};
    this.bookArray.push(newBook);
  }

  getBooks() {
    return this.bookArray;
  }

  deleteBook(id: number) {
    this.bookArray = this.bookArray.filter(book => book.id !== id);
  }
}
