import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../../book.model";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() book!: Book;
  @Output() toggleCompletion = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onToggleCompletion() {
    this.toggleCompletion.emit(this.book.id);
  }

  onRemove() {
    this.remove.emit(this.book.id);
  }
}
