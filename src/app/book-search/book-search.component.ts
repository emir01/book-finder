import { BookSearchService } from './../services/search/book-search.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.less']
})
export class BookSearchComponent implements OnInit {

  term = '';

  searchTerm$ = new Subject<string>();
  clearSearch$ = new Subject();

  books: any;

  constructor(private searchService: BookSearchService) {
    this.searchService.searchBooks(this.searchTerm$, this.clearSearch$).subscribe(data => {
      console.log(data);
      this.books = data.items;
    });

    this.clearSearch$.subscribe(() => this.term = '');
  }

  search() {
    this.searchTerm$.next(this.term);
  }

  ngOnInit() {
    this.searchTerm$.next('way of kings');
  }
}
