import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent {
  @Input()

  book: Book;
}
