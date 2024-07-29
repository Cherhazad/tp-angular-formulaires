import {Component} from '@angular/core';
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  // title = '';
  // author = '';
  // year: number | null = null;
  // genre = '';

  newBookTitle: string = '';
  newBookAuthor: string ='';
  newBookYear: number | null = null;
  newBookGenre: string = '';

  constructor(private bookService: BookService) {
  }

  // addBook() {
  //   if (this.title && this.author && this.year) {
  //     this.bookService.addBook(this.title, this.author, this.year, this.genre);
  //     this.title = '';
  //     this.author = '';
  //     this.year = null;
  //   }
  // }

  onAddBook() {
    if (this.newBookTitle.trim()) {
      const year = this.newBookYear !== null ? this.newBookYear : 0;
      this.bookService.addBook(this.newBookTitle, this.newBookAuthor, year, this.newBookGenre);
      this.newBookTitle = '';
      this.newBookAuthor = '';
      this.newBookYear = null;
      this.newBookGenre = '';
    }
  }
}
