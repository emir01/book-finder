import { Book } from './../../book/book.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, merge, mapTo, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  private API_KEY;
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private httpClient: HttpClient) {
    this.API_KEY = environment.booksApiKey;
  }

  searchBooks(searchTerm: Observable<string>, clearSearch: Observable<any>): Observable<Array<Book>> {
    return searchTerm
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.booksApi(term)),
        merge(clearSearch.pipe(mapTo([]))),
        map(this.extractBooks)
      );
  }

  extractBooks(bookResult: any): Array<Book> {
    const results: Array<Book> = [];

    _.forEach(bookResult.items, item => {
      results.push(new Book(item));
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
}
