import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Result } from 'src/app/core/result/result.model';
import { BookSearchService } from '../services/search/book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.less']
})
export class BookSearchComponent implements OnInit {

  term = '';

  searchTerm$ = new Subject<string>();
  clearSearch$ = new Subject();

  bookResults: Array<Result>;

  constructor(private searchService: BookSearchService) {
    this
      .searchService
      .searchBooks(this.searchTerm$, this.clearSearch$)
      .subscribe(books => {
        this.bookResults = books;
      });

    this.clearSearch$.subscribe(() => this.term = '');
  }



  search() {
    this.searchTerm$.next(this.term);
  }

  ngOnInit() { }
}
