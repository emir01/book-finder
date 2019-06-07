import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, merge, mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  API_KEY = 'AIzaSyAnLpA9wpzoC7GnsNVewKXhEi_CVmoINfk';

  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private httpClient: HttpClient) { }

  searchBooks(searchTerm: Observable<string>, clearSearch: Observable<any>): any {
    return searchTerm
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.booksApi(term)),
        merge(clearSearch.pipe(mapTo([])))
      );
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
