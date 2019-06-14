import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, merge, mapTo, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/core/result/result.model';

@Injectable()
export class BookSearchService {
  private API_KEY;
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private httpClient: HttpClient) {
    this.API_KEY = environment.booksApiKey;
  }

  searchBooks(searchTerm: Observable<string>, clearSearch: Observable<any>): Observable<Array<Result>> {
    return searchTerm
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.booksApi(term)),
        merge(clearSearch.pipe(mapTo([]))),
        map(results => this.extractResults(results))
      );
  }

  extractResults(bookResult: any): Array<Result> {
    const results: Array<Result> = [];
    const mapper = this._mapBookToResult;

    _.forEach(bookResult.items, item => {
      results.push(mapper(item));
    });

    return results;
  }

  booksApi(term) {
    if (_.isString(term) && _.trim(term) !== '') {
      const searchUrl = `${this.baseUrl}${term}&key=${this.API_KEY}`;
      return this.httpClient.get(searchUrl);
    } else {
      return of([]);
    }
  }

  _mapBookToResult(book: any): Result {
    const result = new Result();

    result.title = book.volumeInfo.title;
    result.description = book.volumeInfo.description;

    if (_.has(book, 'volumeInfo.imageLinks.smallThumbnail')) {
      result.imageLink = book.volumeInfo.imageLinks.smallThumbnail;
    }

    result.link = book.selfLink;

    return result;
  }
}
