import { BookMapper } from './book-mapper';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, merge, mapTo, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/core/result/result.model';
import { BookModel } from '../../models/book-model';

@Injectable()
export class BookSearchService {
  private API_KEY;
  private searchBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  private detailsBaseUrl = 'https://www.googleapis.com/books/v1/volumes/';

  constructor(private httpClient: HttpClient, private mapper: BookMapper) {
    this.API_KEY = environment.booksApiKey;
  }

  getBookDetail(bookId: string): Observable<BookModel> {
    return this.bookDetailsApi(bookId)
      .pipe(
        map(results => this.mapper.MapAnyToEntity(results))
      );
  }

  searchBooks(searchTerm: Observable<string>, clearSearch: Observable<any>): Observable<Array<Result>> {
    return searchTerm
      .pipe(
        debounceTime(400),
        merge(
          clearSearch
            .pipe(
              mapTo('')
            )
        ),
        distinctUntilChanged(),
        switchMap(term => this.bookSearchApi(term)),
        map(results => this.extractResults(results))
      );
  }

  private extractResults(bookResult: any): Array<Result> {
    const results: Array<Result> = [];

    _.forEach(bookResult.items, item => {
      results.push(this.mapper.MapAnyToResult(item));
    });

    return results;
  }

  private bookSearchApi(term) {
    if (_.isString(term) && _.trim(term) !== '') {
      const searchUrl = `${this.searchBaseUrl}${term}&key=${this.API_KEY}`;
      return this.httpClient.get(searchUrl);
    } else {
      return of([]);
    }
  }

  private bookDetailsApi(bookId) {
    console.log('book details api');
    if (_.isString(bookId) && _.trim(bookId) !== '') {
      const searchUrl = `${this.detailsBaseUrl}${bookId}?key=${this.API_KEY}`;
      return this.httpClient.get(searchUrl);
    } else {
      return of(undefined);
    }
  }
}
