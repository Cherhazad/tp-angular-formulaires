import {Component, OnInit} from '@angular/core';
import {Book} from "../../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }

}