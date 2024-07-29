import {Component, OnInit} from '@angular/core';
import {Book} from "../../book.model";
import {BookService} from "../book.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookArray$: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.bookArray$ = this.bookService.getBooks();
  }

  ngOnInit() {
    this.bookArray$ = this.bookService.getBooks();
  }

  onToggleTodoCompletion(id: number) {
    this.bookService.toggleBookCompletion(id);
  }

  onDeleteBook(id: number) {
    this.bookService.deleteBook(id);
  }
}
