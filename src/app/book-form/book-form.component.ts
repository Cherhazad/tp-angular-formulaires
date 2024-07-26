import {Component} from '@angular/core';
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  title = '';
  author = '';
  year: number | null = null;
  genre = '';

  constructor(private bookService: BookService) {
  }

  addBook() {
    if (this.title && this.author && this.year) {
      this.bookService.addBook(this.title, this.author, this.year, this.genre);
      this.title = '';
      this.author = '';
      this.year = null;
    }
  }
}
