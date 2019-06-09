import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import * as _ from 'lodash';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.less']
})
export class BookResultsComponent implements OnInit, OnChanges {
  readonly numbeOfResultPerRow = 3;

  @Input()
  results: Array<Book>;

  renderResults: Array<Array<any>>;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    const results: SimpleChange = changes.results;
    this.buildRenderResults(results.currentValue);
  }

  private buildRenderResults(results) {
    if (!_.isUndefined(results)) {
      this.renderResults = _.chunk(results, this.numbeOfResultPerRow);
    } else {
      this.renderResults = new Array<Array<any>>();
    }
  }
}
