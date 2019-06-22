import { Observable } from 'rxjs';
import { BookSearchService } from './../services/search/book-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BookModel } from '../models/book-model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {
  private routeIdProperty = 'id';

  book$: Observable<BookModel>;

  constructor(
    private bookSearchService: BookSearchService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        switchMap(
          (paramMap: ParamMap) => this.bookSearchService.getBookDetail(paramMap.get(this.routeIdProperty))));
  }
}
